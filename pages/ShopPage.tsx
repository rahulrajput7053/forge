
import React, { useState, useMemo } from 'react';
import type { Product } from '../types';
import ProductCard from '../components/Ecomm/ProductCard';
import CategoryMenu from '../components/Ecomm/CategoryMenu';

interface ShopPageProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
    onQuickView: (product: Product) => void;
}

const ShopPage: React.FC<ShopPageProps> = ({ products = [], onAddToCart, onQuickView }) => {
    // Robust safety check for products array
    const safeProducts = Array.isArray(products) ? products : [];
    
    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(safeProducts.map(p => p.category)));
        return ['All', ...uniqueCategories];
    }, [safeProducts]);

    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'All') {
            return safeProducts;
        }
        return safeProducts.filter(p => p.category === activeCategory);
    }, [safeProducts, activeCategory]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
            <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary uppercase mb-4">
                    Collections
                </h1>
                <p className="text-text-secondary max-w-xl">
                    Explore our latest drops and urban essentials. Designed for those who define their own style.
                </p>
            </header>
            
            <div className="mb-12 sticky top-[4rem] z-30 bg-black/80 backdrop-blur-md py-4">
                <CategoryMenu 
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                />
            </div>
            
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
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
                <div className="text-center py-32 border-2 border-dashed border-border-color rounded-2xl">
                    <p className="text-text-secondary text-lg">Inventory restocking soon. Check back later.</p>
                </div>
            )}
        </div>
    );
};

export default ShopPage;
