
import React from 'react';
import type { Product } from '../types';
import ProductCard from '../components/Ecomm/ProductCard';

interface HomePageProps {
    products: Product[];
    onNavigate: (page: 'shop') => void;
    onAddToCart: (product: Product) => void;
    onQuickView: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ products, onNavigate, onAddToCart, onQuickView }) => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-component-bg border-b border-border-color">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Discover Your Style
                    </h1>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
                        High-quality apparel and accessories for the modern individual.
                    </p>
                    <button
                        onClick={() => onNavigate('shop')}
                        className="bg-accent text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-accent-hover"
                    >
                        Shop Now
                    </button>
                </div>
            </section>
            
            {/* Featured Products Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
    );
};

export default HomePage;
