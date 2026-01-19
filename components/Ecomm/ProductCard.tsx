
import React from 'react';
import type { Product } from '../../types';
import { HeartIcon } from '../IconComponents';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
    onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView }) => {
    return (
        <div className="group relative bg-transparent flex flex-col cursor-pointer animate-in fade-in duration-700">
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                />
                
                {/* Product Badge */}
                {product.offerPrice && (
                    <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest z-10">
                        Sale
                    </div>
                )}

                {/* Hover Actions Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                    <button 
                        onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                        className="w-full py-4 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                    >
                        Add To Bag
                    </button>
                    <button 
                        onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
                        className="w-full py-4 bg-black/60 text-white text-xs font-black uppercase tracking-widest backdrop-blur-md hover:bg-black/80 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75"
                    >
                        Quick Look
                    </button>
                </div>

                <button 
                    className="absolute top-4 right-4 p-2 bg-white/10 text-white rounded-full backdrop-blur-md hover:bg-white hover:text-black transition-all z-20"
                    onClick={(e) => e.stopPropagation()}
                >
                    <HeartIcon className="w-4 h-4"/>
                </button>
            </div>

            {/* Product Info */}
            <div className="py-4 flex flex-col">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="text-[13px] font-bold text-text-primary uppercase tracking-tight group-hover:text-accent transition-colors">
                        {product.name}
                    </h3>
                    <div className="text-[13px] font-bold text-text-primary whitespace-nowrap">
                        {product.offerPrice ? (
                            <div className="flex flex-col items-end">
                                <span className="text-accent">₹{product.offerPrice}</span>
                                <span className="text-[10px] text-text-secondary line-through">₹{product.price}</span>
                            </div>
                        ) : (
                            <span>₹{product.price}</span>
                        )}
                    </div>
                </div>
                <p className="text-[11px] text-text-secondary uppercase tracking-widest mt-1">
                    {product.category}
                </p>
            </div>
            
            {/* Click anchor for whole card */}
            <div className="absolute inset-0" onClick={() => onQuickView(product)}></div>
        </div>
    );
};

export default ProductCard;
