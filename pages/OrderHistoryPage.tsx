import React from 'react';
// Fix: Corrected import path for type definition.
import type { Order } from '../types';

interface OrderHistoryPageProps {
    orders: Order[];
}

const OrderHistoryPage: React.FC<OrderHistoryPageProps> = ({ orders }) => {
    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'Delivered': return 'bg-green-900 text-green-300';
            case 'Processing': return 'bg-yellow-900 text-yellow-300';
            case 'Cancelled': return 'bg-red-900 text-red-300';
            default: return 'bg-gray-700 text-gray-300';
        }
    };
    
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-bold text-text-primary mb-8 text-center">Your Orders</h1>
            {orders.length === 0 ? (
                <div className="text-center">
                    <p className="text-text-secondary">You haven't placed any orders yet.</p>
                </div>
            ) : (
                <div className="max-w-4xl mx-auto space-y-6">
                    {orders.map(order => (
                        <div key={order.id} className="bg-component-bg border border-border-color rounded-lg p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="font-semibold text-text-primary">Order #{order.id}</h2>
                                    <p className="text-sm text-text-secondary">Date: {order.date}</p>
                                </div>
                                <div className="text-right">
                                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                    <p className="font-bold text-text-primary mt-1">${order.total.toFixed(2)}</p>
                                </div>
                            </div>
                            <div>
                                {order.items.map(item => (
                                    <div key={item.id} className="flex items-center py-2 border-t border-border-color">
                                        <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                                        <div className="ml-4 flex-grow">
                                            <p className="font-medium text-text-primary">{item.name}</p>
                                            <p className="text-sm text-text-secondary">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-medium text-text-primary">${((item.offerPrice ?? item.price) * item.quantity).toFixed(2)}</p>
                                            {item.offerPrice && (
                                                <p className="text-xs text-text-secondary line-through">${(item.price * item.quantity).toFixed(2)}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderHistoryPage;