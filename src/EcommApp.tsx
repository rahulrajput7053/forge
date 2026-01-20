
import React, { useState, useCallback } from 'react';
import type { Product, CartItem, Order, Customer } from './types';
import EcommHeader from './components/Ecomm/Header';
import EcommFooter from './components/Ecomm/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import QuickViewModal from './components/Ecomm/QuickViewModal';

interface EcommAppProps {
    onBackToCrm: () => void;
    products: Product[];
}

export type EcommPage = 'home' | 'shop' | 'contact' | 'cart' | 'orders' | 'payment';

const EcommApp: React.FC<EcommAppProps> = ({ onBackToCrm, products = [] }) => {
    const [page, setPage] = useState<EcommPage>('home');
    const [cart, setCart] = useState<CartItem[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    const handleNavigate = useCallback((newPage: EcommPage) => {
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleAddToCart = useCallback((productToAdd: Product) => {
        setCart(prevCart => {
            const currentCart = prevCart || [];
            const existingItem = currentCart.find(item => item.id === productToAdd.id);
            if (existingItem) {
                return currentCart.map(item =>
                    item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...currentCart, { ...productToAdd, quantity: 1 }];
        });
    }, []);

    const handleUpdateQuantity = useCallback((productId: number, quantity: number) => {
        if (quantity < 1) return;
        setCart(prevCart =>
            (prevCart || []).map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    }, []);

    const handleRemoveFromCart = useCallback((productId: number) => {
        setCart(prevCart => (prevCart || []).filter(item => item.id !== productId));
    }, []);
    
    const handleAddCustomer = (customer: Pick<Customer, 'name' | 'email'>) => {
        console.log('New customer inquiry logged in CRM:', customer);
    };

    const handlePaymentSuccess = () => {
        const currentCart = cart || [];
        const newOrder: Order = {
            id: `ORD-${Date.now()}`,
            date: new Date().toLocaleDateString(),
            total: currentCart.reduce((sum, item) => sum + (item.offerPrice ?? item.price) * item.quantity, 0),
            status: 'Processing',
            items: [...currentCart],
        };
        setOrders(prevOrders => [newOrder, ...(prevOrders || [])]);
        setCart([]);
        handleNavigate('orders');
    };

    const handleQuickView = (product: Product) => {
        setQuickViewProduct(product);
    };

    const handleCloseQuickView = () => {
        setQuickViewProduct(null);
    };

    const safeCart = cart || [];
    const cartItemCount = safeCart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = safeCart.reduce((sum, item) => sum + (item.offerPrice ?? item.price) * item.quantity, 0);

    const renderPage = () => {
        switch (page) {
            case 'home':
                return <HomePage products={products} onNavigate={handleNavigate} onAddToCart={handleAddToCart} onQuickView={handleQuickView} />;
            case 'shop':
                return <ShopPage products={products} onAddToCart={handleAddToCart} onQuickView={handleQuickView} />;
            case 'contact':
                return <ContactPage onAddCustomer={handleAddCustomer} />;
            case 'cart':
                return <CartPage cartItems={safeCart} onUpdateQuantity={handleUpdateQuantity} onRemoveFromCart={handleRemoveFromCart} onNavigate={handleNavigate} />;
            case 'payment':
                return <PaymentPage total={cartTotal} onPaymentSuccess={handlePaymentSuccess} />;
            case 'orders':
                return <OrderHistoryPage orders={orders} />;
            default:
                return <HomePage products={products} onNavigate={handleNavigate} onAddToCart={handleAddToCart} onQuickView={handleQuickView} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#000] text-text-primary font-sans antialiased">
            <EcommHeader 
                onNavigate={handleNavigate}
                cartItemCount={cartItemCount}
                onBackToCrm={onBackToCrm}
                activePage={page}
            />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <EcommFooter />
            {quickViewProduct && (
                <QuickViewModal 
                    product={quickViewProduct} 
                    onClose={handleCloseQuickView} 
                    onAddToCart={handleAddToCart}
                />
            )}
        </div>
    );
};

export default EcommApp;

