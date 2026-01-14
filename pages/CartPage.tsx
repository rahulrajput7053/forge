import React from 'react';
// Fix: Corrected import paths.
import type { CartItem } from '../types';
import { Trash2Icon } from '../components/IconComponents';

interface CartPageProps {
    cartItems: CartItem[];
    onUpdateQuantity: (productId: number, quantity: number) => void;
    onRemoveFromCart: (productId: number) => void;
    // Fix: Replaced 'shop' with 'home' to align with the EcommPage type and resolve the type error.
    onNavigate: (page: 'home' | 'payment') => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, onUpdateQuantity, onRemoveFromCart, onNavigate }) => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.offerPrice ?? item.price) * item.quantity, 0);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-bold text-text-primary mb-8 text-center">Your Cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <p className="text-text-secondary mb-4">Your cart is empty.</p>
                    <button
                        // Fix: Updated the navigation target from 'shop' to 'home' to match the corrected onNavigate prop type.
                        onClick={() => onNavigate('home')}
                        className="bg-accent text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 hover:bg-accent-hover"
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-component-bg border border-border-color rounded-lg p-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between py-4 border-b border-border-color last:border-b-0">
                                <div className="flex items-center">
                                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-text-primary">{item.name}</h3>
                                        {item.offerPrice ? (
                                            <p className="text-sm text-text-secondary">
                                                <span className="text-accent">${item.offerPrice.toFixed(2)}</span>
                                                <span className="ml-2 line-through">${item.price.toFixed(2)}</span>
                                            </p>
                                        ) : (
                                            <p className="text-sm text-text-secondary">${item.price.toFixed(2)}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                                        className="w-16 bg-base-bg border border-border-color rounded-md py-1 px-2 text-center"
                                    />
                                    <button onClick={() => onRemoveFromCart(item.id)} className="text-text-secondary hover:text-red-400">
                                        <Trash2Icon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-component-bg border border-border-color rounded-lg p-6 h-fit">
                        <h2 className="text-xl font-semibold text-text-primary mb-4">Order Summary</h2>
                        <div className="flex justify-between text-text-secondary mb-2">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-text-secondary mb-4">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="border-t border-border-color pt-4 flex justify-between font-bold text-text-primary">
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={() => onNavigate('payment')}
                            className="mt-6 w-full bg-accent text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:bg-accent-hover"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;