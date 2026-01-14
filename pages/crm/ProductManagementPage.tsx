import React, { useState } from 'react';
import type { Product } from '../../types';
import { PlusCircleIcon, EditIcon, Trash2Icon } from '../../components/IconComponents';
import ProductFormModal from '../../components/crm/ProductFormModal';

interface ProductManagementPageProps {
    products: Product[];
    onAddProduct: (product: Omit<Product, 'id'>) => void;
    onUpdateProduct: (product: Product) => void;
    onDeleteProduct: (productId: number) => void;
}

const ProductManagementPage: React.FC<ProductManagementPageProps> = ({ products, onAddProduct, onUpdateProduct, onDeleteProduct }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    const handleAddProductClick = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    const handleEditProductClick = (product: Product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleSaveProduct = (productData: Product | Omit<Product, 'id'>) => {
        if ('id' in productData && productData.id !== 0) {
            onUpdateProduct(productData as Product);
        } else {
            onAddProduct(productData as Omit<Product, 'id'>);
        }
        setIsModalOpen(false);
        setEditingProduct(null);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-text-primary">Manage Products</h2>
                <button
                    onClick={handleAddProductClick}
                    className="flex items-center gap-2 bg-accent text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:bg-accent-hover"
                >
                    <PlusCircleIcon className="w-5 h-5" />
                    Add Product
                </button>
            </div>
            <div className="bg-component-bg border border-border-color rounded-xl">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-text-secondary uppercase border-b border-border-color">
                        <tr>
                            <th scope="col" className="px-6 py-3">Product Name</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-border-color hover:bg-base-bg">
                                <td className="px-6 py-4 font-medium text-text-primary whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img src={product.imageUrl} alt={product.name} className="w-10 h-10 object-cover rounded-md mr-4" />
                                        {product.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-text-secondary">{product.category}</td>
                                <td className="px-6 py-4 text-text-secondary">
                                    {product.offerPrice ? (
                                        <div>
                                            <span className="text-accent font-semibold">${product.offerPrice.toFixed(2)}</span>
                                            <span className="ml-2 text-xs line-through">${product.price.toFixed(2)}</span>
                                        </div>
                                    ) : (
                                        <span>${product.price.toFixed(2)}</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => handleEditProductClick(product)} className="p-1 text-text-secondary hover:text-accent"><EditIcon className="w-4 h-4" /></button>
                                    <button onClick={() => onDeleteProduct(product.id)} className="p-1 text-text-secondary hover:text-red-400 ml-2"><Trash2Icon className="w-4 h-4" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isModalOpen && (
                <ProductFormModal
                    product={editingProduct}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSaveProduct}
                />
            )}
        </div>
    );
};

export default ProductManagementPage;