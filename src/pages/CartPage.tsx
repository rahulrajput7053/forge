
import React from 'react';
import type { CartItem } from '../types';
import { Trash2Icon } from '../components/IconComponents';

interface CartPageProps {
    cartItems: CartItem[];
    onUpdateQuantity: (productId: number, quantity: number) => void;
    onRemoveFromCart: (productId: number) => void;
    onNavigate: (page: 'home' | 'payment') => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, onUpdateQuantity, onRemoveFromCart, onNavigate }) => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.offerPrice ?? item.price) * item.quantity, 0);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16">
            <h1 className="text-4xl font-black text-text-primary mb-12 uppercase tracking-tighter">Your Bag</h1>
            {cartItems.length === 0 ? (
                <div className="text-center py-20 border-2 border-dashed border-border-color rounded-2xl">
                    <p className="text-text-secondary mb-6 font-medium">Your bag is currently empty.</p>
                    <button
                        onClick={() => onNavigate('home')}
                        className="bg-accent text-white font-bold py-4 px-10 rounded-none uppercase tracking-widest transition-all duration-300 hover:bg-accent-hover"
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between py-6 border-b border-border-color">
                                <div className="flex items-center">
                                    <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover bg-black" />
                                    <div className="ml-6">
                                        <h3 className="font-bold text-text-primary uppercase tracking-tight text-lg">{item.name}</h3>
                                        <p className="text-xs text-text-secondary uppercase tracking-widest mt-1 mb-2">{item.category}</p>
                                        {item.offerPrice ? (
                                            <p className="text-sm font-black">
                                                <span className="text-accent">₹{item.offerPrice.toLocaleString()}</span>
                                                <span className="ml-2 text-text-secondary line-through">₹{item.price.toLocaleString()}</span>
                                            </p>
                                        ) : (
                                            <p className="text-sm font-black text-text-primary">₹{item.price.toLocaleString()}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center border border-border-color">
                                        <button 
                                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                            className="px-3 py-1 text-text-secondary hover:text-white"
                                        >-</button>
                                        <span className="px-4 py-1 text-sm font-bold">{item.quantity}</span>
                                        <button 
                                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                            className="px-3 py-1 text-text-secondary hover:text-white"
                                        >+</button>
                                    </div>
                                    <button onClick={() => onRemoveFromCart(item.id)} className="text-text-secondary hover:text-red-400 transition-colors">
                                        <Trash2Icon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-component-bg border border-border-color p-8 h-fit shadow-2xl">
                        <h2 className="text-2xl font-black text-text-primary mb-8 uppercase tracking-tighter">Order Summary</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-text-secondary text-sm uppercase tracking-widest">
                                <span>Subtotal</span>
                                <span className="text-text-primary font-bold">₹{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-text-secondary text-sm uppercase tracking-widest">
                                <span>Shipping</span>
                                <span className="text-accent font-bold">Calculated at checkout</span>
                            </div>
                        </div>
                        <div className="border-t border-border-color pt-6 flex justify-between items-end mb-10">
                            <span className="font-black text-text-primary uppercase tracking-tighter text-xl">Total</span>
                            <span className="font-black text-accent text-3xl">₹{subtotal.toLocaleString()}</span>
                        </div>
                        <button
                            onClick={() => onNavigate('payment')}
                            className="w-full bg-white text-black font-black py-5 uppercase tracking-widest transition-all duration-300 hover:bg-accent hover:text-white"
                        >
                            Checkout Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
