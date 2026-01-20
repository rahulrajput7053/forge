
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-component-bg border border-border-color rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
                <form onSubmit={handleSubmit}>
                    <div className="p-6 border-b border-border-color flex justify-between items-center bg-black/20">
                        <h3 className="text-lg font-bold text-text-primary uppercase tracking-tight">{product ? 'Update Collection Item' : 'Add New Item'}</h3>
                        <button type="button" onClick={onClose} className="text-text-secondary hover:text-white transition-colors">
                            <XIcon className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="p-6 space-y-5">
                        <div className="space-y-1">
                            <label htmlFor="name" className="block text-[10px] font-black text-text-secondary uppercase tracking-widest">Product Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-black border border-border-color rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent transition-colors" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-1">
                                <label htmlFor="price" className="block text-[10px] font-black text-text-secondary uppercase tracking-widest">Base Price (₹)</label>
                                <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} required step="1" className="w-full bg-black border border-border-color rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent transition-colors" />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="offerPrice" className="block text-[10px] font-black text-text-secondary uppercase tracking-widest">Sale Price (₹)</label>
                                <input type="number" name="offerPrice" id="offerPrice" value={formData.offerPrice || ''} onChange={handleChange} placeholder="Optional" step="1" className="w-full bg-black border border-border-color rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="category" className="block text-[10px] font-black text-text-secondary uppercase tracking-widest">Category</label>
                            <input type="text" name="category" id="category" value={formData.category} onChange={handleChange} required placeholder="e.g. Outerwear" className="w-full bg-black border border-border-color rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent transition-colors" />
                        </div>
                         <div className="space-y-1">
                            <label htmlFor="imageUrl" className="block text-[10px] font-black text-text-secondary uppercase tracking-widest">Image URL</label>
                            <input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} required className="w-full bg-black border border-border-color rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent transition-colors text-xs" />
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-black/40 border-t border-border-color flex justify-end gap-3">
                        <button type="button" onClick={onClose} className="text-text-secondary font-bold text-xs uppercase tracking-widest px-4 hover:text-white transition-colors">Cancel</button>
                        <button type="submit" className="bg-accent text-white font-bold py-2.5 px-6 rounded-lg hover:bg-accent-hover transition-colors uppercase tracking-widest text-xs">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductFormModal;
