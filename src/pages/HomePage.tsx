
import React from 'react';
import type { Product } from '../types';
import ProductCard from '../components/Ecomm/ProductCard';

interface HomePageProps {
    products: Product[];
    onNavigate: (page: 'shop') => void;
    onAddToCart: (product: Product) => void;
    onQuickView: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ products = [], onNavigate, onAddToCart, onQuickView }) => {
    const safeProducts = Array.isArray(products) ? products : [];
    const featuredProducts = safeProducts.slice(0, 4);

    return (
        <div className="overflow-x-hidden">
            {/* Bold Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img 
                        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1600" 
                        alt="Hero background" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-6xl md:text-9xl font-black text-white tracking-tightest uppercase mb-6 leading-[0.9]">
                        Forge <br/> Fabric
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-10 font-medium">
                        Defining the future of urban streetwear. Premium quality, unparalleled style.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => onNavigate('shop')}
                            className="bg-white text-black font-bold py-4 px-10 rounded-none uppercase tracking-widest transition-all duration-300 hover:bg-accent hover:text-white"
                        >
                            Shop Collection
                        </button>
                        <button
                            onClick={() => onNavigate('shop')}
                            className="bg-transparent border border-white text-white font-bold py-4 px-10 rounded-none uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
                        >
                            View Lookbook
                        </button>
                    </div>
                </div>
            </section>
            
            {/* Best Sellers Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-12 py-24">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Our Favorites</span>
                        <h2 className="text-4xl md:text-5xl font-black text-text-primary uppercase tracking-tighter">Best Sellers</h2>
                    </div>
                    <button 
                        onClick={() => onNavigate('shop')}
                        className="text-text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors"
                    >
                        View All
                    </button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                    {featuredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            onQuickView={onQuickView}
                        />
                    ))}
                </div>
            </section>

            {/* Campaign Section */}
            <section className="bg-component-bg py-24 border-t border-b border-border-color">
                <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <img 
                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1000" 
                            alt="Campaign" 
                            className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-5xl font-black text-text-primary uppercase tracking-tighter mb-6 leading-none">
                            Sustainability <br/> Meets Street
                        </h3>
                        <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                            We believe in quality over quantity. Every piece in our collection is crafted with sustainably sourced materials and ethical manufacturing processes.
                        </p>
                        <button 
                            className="bg-accent text-white font-bold py-4 px-8 uppercase tracking-widest"
                        >
                            Our Ethos
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
