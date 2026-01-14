import React from 'react';
import type { Product } from '../../types';
import { ShoppingCartIcon, EyeIcon, HeartIcon } from '../IconComponents';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
    onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView }) => {
    return (
        <div className="group relative bg-component-bg border border-border-color rounded-xl overflow-hidden transition-all duration-300 flex flex-col">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <button 
                        onClick={() => onAddToCart(product)}
                        className="py-2 px-4 bg-white/20 text-white text-sm font-semibold rounded-md backdrop-blur-sm hover:bg-white/30 transition-all transform hover:scale-105"
                        aria-label="Add to cart"
                    >
                        Add to Cart
                    </button>
                    <button 
                        onClick={() => onQuickView(product)}
                        className="p-2.5 bg-white/20 text-white rounded-md backdrop-blur-sm hover:bg-white/30 transition-all transform hover:scale-105"
                        aria-label="Quick view"
                    >
                        <EyeIcon className="w-5 h-5" />
                    </button>
                </div>
                 <button className="absolute top-2 right-2 p-2 bg-white/20 text-white rounded-full backdrop-blur-sm hover:bg-white/30 transition-all">
                    <HeartIcon className="w-5 h-5"/>
                </button>
            </div>
            <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-sm font-semibold text-text-primary">Forge Fabric</h3>
                <h4 className="mt-1 text-base text-text-secondary flex-grow">
                    <a href="#" onClick={(e) => { e.preventDefault(); onQuickView(product); }} className="hover:text-accent">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </a>
                </h4>
                <div className="mt-2">
                    {product.offerPrice ? (
                        <p className="text-lg font-bold text-text-primary">
                            <span className="text-accent">${product.offerPrice.toFixed(2)}</span>
                            <span className="ml-2 text-sm text-text-secondary line-through">${product.price.toFixed(2)}</span>
                        </p>
                    ) : (
                        <p className="text-lg font-bold text-text-primary">${product.price.toFixed(2)}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;