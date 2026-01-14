
import React, { useState, useMemo } from 'react';
import type { Product } from '../types';
import ProductCard from '../components/Ecomm/ProductCard';
import CategoryMenu from '../components/Ecomm/CategoryMenu';

interface ShopPageProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
    onQuickView: (product: Product) => void;
}

const ShopPage: React.FC<ShopPageProps> = ({ products, onAddToCart, onQuickView }) => {
    const categories = useMemo(() => ['All', ...Array.from(new Set(products.map(p => p.category)))], [products]);
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'All') {
            return products;
        }
        return products.filter(p => p.category === activeCategory);
    }, [products, activeCategory]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-bold text-text-primary mb-8 text-center">Our Collection</h1>
            
            <div className="mb-8">
                <CategoryMenu 
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                />
            </div>
            
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            onQuickView={onQuickView}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-text-secondary">No products found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default ShopPage;
