
import React, { useState } from 'react';
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

type EcommPage = 'home' | 'shop' | 'contact' | 'cart' | 'orders' | 'payment';

const EcommApp: React.FC<EcommAppProps> = ({ onBackToCrm, products }) => {
    const [page, setPage] = useState<EcommPage>('home');
    const [cart, setCart] = useState<CartItem[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    const handleNavigate = (newPage: EcommPage) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    };

    const handleAddToCart = (productToAdd: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === productToAdd.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...productToAdd, quantity: 1 }];
        });
    };

    const handleUpdateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) return;
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const handleRemoveFromCart = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };
    
    const handleAddCustomer = (customer: Pick<Customer, 'name' | 'email'>) => {
        console.log('New customer inquiry:', customer);
        // In a real app, this would likely be sent to the CRM backend
    };

    const handlePaymentSuccess = () => {
        const newOrder: Order = {
            id: `ORD-${Date.now()}`,
            date: new Date().toLocaleDateString(),
            total: cart.reduce((sum, item) => sum + (item.offerPrice ?? item.price) * item.quantity, 0),
            status: 'Processing',
            items: [...cart],
        };
        setOrders(prevOrders => [newOrder, ...prevOrders]);
        setCart([]);
        handleNavigate('orders');
    };

    const handleQuickView = (product: Product) => {
        setQuickViewProduct(product);
    };

    const handleCloseQuickView = () => {
        setQuickViewProduct(null);
    };

    const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.offerPrice ?? item.price) * item.quantity, 0);

    const renderPage = () => {
        switch (page) {
            case 'home':
                return <HomePage products={products} onNavigate={handleNavigate} onAddToCart={handleAddToCart} onQuickView={handleQuickView} />;
            case 'shop':
                return <ShopPage products={products} onAddToCart={handleAddToCart} onQuickView={handleQuickView} />;
            case 'contact':
                return <ContactPage onAddCustomer={handleAddCustomer} />;
            case 'cart':
                return <CartPage cartItems={cart} onUpdateQuantity={handleUpdateQuantity} onRemoveFromCart={handleRemoveFromCart} onNavigate={handleNavigate} />;
            case 'payment':
                return <PaymentPage total={cartTotal} onPaymentSuccess={handlePaymentSuccess} />;
            case 'orders':
                return <OrderHistoryPage orders={orders} />;
            default:
                return <HomePage products={products} onNavigate={handleNavigate} onAddToCart={handleAddToCart} onQuickView={handleQuickView} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-base-bg text-text-primary font-sans">
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