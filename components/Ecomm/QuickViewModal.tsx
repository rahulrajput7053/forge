import React from 'react';
import type { Product } from '../../types';
import { XIcon, ShoppingCartIcon } from '../IconComponents';

interface QuickViewModalProps {
    product: Product;
    onClose: () => void;
    onAddToCart: (product: Product) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, onAddToCart }) => {
    
    const handleAddToCart = () => {
        onAddToCart(product);
        onClose();
    };

    // Prevent clicks inside the modal from closing it
    const handleModalContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4" 
            onClick={onClose}
        >
            <div 
                className="bg-component-bg border border-border-color rounded-xl shadow-lg w-full max-w-4xl mx-auto flex flex-col md:flex-row overflow-hidden" 
                onClick={handleModalContentClick}
            >
                <div className="md:w-1/2 h-64 md:h-auto">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col relative">
                    <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-text-primary">
                        <XIcon className="w-6 h-6" />
                    </button>
                    <h2 className="text-2xl font-bold text-text-primary pr-8">{product.name}</h2>
                    <p className="text-sm text-text-secondary mt-1">{product.category}</p>
                    <div className="my-4">
                        {product.offerPrice ? (
                            <p className="text-3xl font-bold text-text-primary">
                                <span className="text-accent">${product.offerPrice.toFixed(2)}</span>
                                <span className="ml-3 text-xl text-text-secondary line-through">${product.price.toFixed(2)}</span>
                            </p>
                        ) : (
                            <p className="text-3xl font-bold text-accent">${product.price.toFixed(2)}</p>
                        )}
                    </div>
                    <p className="text-text-secondary text-sm flex-grow mb-6">
                        A brief description of the product would go here. For now, enjoy this placeholder text about the wonderful '{product.name}'. It's known for its quality and style, a perfect addition to any collection.
                    </p>
                    <button
                        onClick={handleAddToCart}
                        className="w-full flex items-center justify-center gap-2 bg-accent text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-accent-hover"
                    >
                        <ShoppingCartIcon className="w-5 h-5" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;