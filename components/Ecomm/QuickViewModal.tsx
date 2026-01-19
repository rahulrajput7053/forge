
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

    const handleModalContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center px-4 md:px-6" 
            onClick={onClose}
        >
            <div 
                className="bg-[#0a0a0a] border border-border-color shadow-2xl w-full max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in duration-300" 
                onClick={handleModalContentClick}
            >
                <div className="md:w-3/5 h-[40vh] md:h-auto bg-black relative">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    {product.offerPrice && (
                        <div className="absolute top-6 left-6 bg-accent text-white text-[10px] font-black px-3 py-1 uppercase tracking-[0.2em] z-10">
                            Limited Drop
                        </div>
                    )}
                </div>
                <div className="md:w-2/5 p-8 md:p-12 flex flex-col relative bg-component-bg">
                    <button onClick={onClose} className="absolute top-6 right-6 text-text-secondary hover:text-white transition-colors">
                        <XIcon className="w-6 h-6" />
                    </button>
                    
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Collection Drop</span>
                    <h2 className="text-4xl font-black text-text-primary uppercase tracking-tightest leading-none mb-2">{product.name}</h2>
                    <p className="text-xs text-text-secondary uppercase tracking-[0.2em] mb-8">{product.category}</p>
                    
                    <div className="mb-10">
                        {product.offerPrice ? (
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-text-primary">₹{product.offerPrice.toLocaleString()}</span>
                                <span className="text-sm text-text-secondary line-through mt-1">₹{product.price.toLocaleString()}</span>
                            </div>
                        ) : (
                            <p className="text-4xl font-black text-text-primary">₹{product.price.toLocaleString()}</p>
                        )}
                    </div>
                    
                    <div className="flex-grow">
                        <h4 className="text-[10px] font-black text-text-secondary uppercase tracking-widest mb-4">Description</h4>
                        <p className="text-text-secondary text-sm leading-relaxed mb-8">
                            Premium heavyweight fabric engineered for the perfect oversized silhouette. Features reinforced stitching and our signature urban finish. Part of the limited edition Forge Fabric series.
                        </p>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-border-color">
                        <button
                            onClick={handleAddToCart}
                            className="w-full flex items-center justify-center gap-3 bg-white text-black font-black py-5 px-6 uppercase tracking-[0.2em] transition-all duration-300 hover:bg-accent hover:text-white text-xs"
                        >
                            <ShoppingCartIcon className="w-5 h-5" />
                            Secure To Bag
                        </button>
                        <p className="text-[9px] text-center text-text-secondary uppercase tracking-widest opacity-50">
                            Fast shipping & free returns across India
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
