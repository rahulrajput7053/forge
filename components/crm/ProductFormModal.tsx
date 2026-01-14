import React, { useState, useEffect } from 'react';
import type { Product } from '../../types';
import { XIcon } from '../IconComponents';

interface ProductFormModalProps {
    product: Product | null;
    onClose: () => void;
    onSave: (product: Product | Omit<Product, 'id'>) => void;
}

const ProductFormModal: React.FC<ProductFormModalProps> = ({ product, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        offerPrice: 0,
        imageUrl: '',
        category: ''
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                price: product.price,
                offerPrice: product.offerPrice || 0,
                imageUrl: product.imageUrl,
                category: product.category,
            });
        } else {
             setFormData({ name: '', price: 0, offerPrice: 0, imageUrl: '', category: '' });
        }
    }, [product]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: (name === 'price' || name === 'offerPrice') ? parseFloat(value) || 0 : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const saveData = {
            ...formData,
            offerPrice: formData.offerPrice > 0 ? formData.offerPrice : undefined,
        };
        if (product) {
            onSave({ ...saveData, id: product.id });
        } else {
            onSave(saveData);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
            <div className="bg-component-bg border border-border-color rounded-xl shadow-lg w-full max-w-md mx-4">
                <form onSubmit={handleSubmit}>
                    <div className="p-6 border-b border-border-color flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-text-primary">{product ? 'Edit Product' : 'Add New Product'}</h3>
                        <button type="button" onClick={onClose} className="text-text-secondary hover:text-text-primary">
                            <XIcon className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Product Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-base-bg border border-border-color rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                                <label htmlFor="price" className="block text-sm font-medium text-text-secondary mb-1">Price</label>
                                <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} required step="0.01" className="w-full bg-base-bg border border-border-color rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50" />
                            </div>
                            <div>
                                <label htmlFor="offerPrice" className="block text-sm font-medium text-text-secondary mb-1">Offer Price <span className="text-xs">(optional)</span></label>
                                <input type="number" name="offerPrice" id="offerPrice" value={formData.offerPrice || ''} onChange={handleChange} placeholder="e.g. 19.99" step="0.01" className="w-full bg-base-bg border border-border-color rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-text-secondary mb-1">Category</label>
                            <input type="text" name="category" id="category" value={formData.category} onChange={handleChange} required className="w-full bg-base-bg border border-border-color rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50" />
                        </div>
                         <div>
                            <label htmlFor="imageUrl" className="block text-sm font-medium text-text-secondary mb-1">Image URL</label>
                            <input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} required className="w-full bg-base-bg border border-border-color rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50" />
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-base-bg/50 border-t border-border-color flex justify-end gap-3 rounded-b-xl">
                        <button type="button" onClick={onClose} className="bg-component-bg border border-border-color text-text-primary font-semibold py-2 px-4 rounded-lg hover:bg-border-color/50 transition-colors">Cancel</button>
                        <button type="submit" className="bg-accent text-white font-semibold py-2 px-4 rounded-lg hover:bg-accent-hover transition-colors">Save Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductFormModal;