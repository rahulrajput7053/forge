
import React from 'react';
import type { Order } from '../types';

interface OrderHistoryPageProps {
    orders: Order[];
}

const OrderHistoryPage: React.FC<OrderHistoryPageProps> = ({ orders = [] }) => {
    const safeOrders = Array.isArray(orders) ? orders : [];

    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'Delivered': return 'bg-green-500/10 text-green-400 border-green-500/20';
            case 'Processing': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
            case 'Cancelled': return 'bg-red-500/10 text-red-400 border-red-500/20';
            default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
        }
    };
    
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 min-h-screen">
            <header className="mb-12">
                <h1 className="text-4xl font-black uppercase tracking-tighter text-text-primary">Order History</h1>
                <p className="text-text-secondary mt-2">Track your current shipments and view past purchases.</p>
            </header>

            {safeOrders.length === 0 ? (
                <div className="text-center py-20 border-2 border-dashed border-border-color rounded-3xl">
                    <p className="text-text-secondary font-medium">No orders found in your history.</p>
                </div>
            ) : (
                <div className="max-w-4xl space-y-8">
                    {safeOrders.map(order => (
                        <div key={order.id} className="bg-component-bg border border-border-color rounded-2xl overflow-hidden shadow-xl">
                            <div className="p-6 border-b border-border-color bg-white/5 flex flex-wrap justify-between items-center gap-4">
                                <div>
                                    <h2 className="font-black text-text-primary uppercase tracking-tight">Order #{order.id}</h2>
                                    <p className="text-xs text-text-secondary mt-1">Placed on {order.date}</p>
                                </div>
                                <div className="flex items-center gap-6">
                                     <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                    <p className="font-black text-text-primary text-xl">₹{order.total.toFixed(0)}</p>
                                </div>
                            </div>
                            <div className="divide-y divide-border-color p-6">
                                {(order.items || []).map(item => (
                                    <div key={item.id} className="flex items-center py-4 first:pt-0 last:pb-0">
                                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover bg-black" />
                                        <div className="ml-6 flex-grow">
                                            <p className="font-bold text-text-primary uppercase text-sm tracking-tight">{item.name}</p>
                                            <p className="text-xs text-text-secondary mt-1 uppercase tracking-widest">{item.category} • Qty {item.quantity}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-black text-text-primary">₹{((item.offerPrice ?? item.price) * item.quantity).toFixed(0)}</p>
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
