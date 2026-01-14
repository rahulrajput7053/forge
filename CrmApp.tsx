import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardCard } from './components/DashboardCard';
import { SalesChart } from './components/SalesChart';
import { RecentCustomersTable } from './components/RecentCustomersTable';
import { InsightGenerator } from './components/InsightGenerator';
import { METRICS_DATA, SALES_DATA, RECENT_CUSTOMERS } from './constants';
import ProductManagementPage from './pages/crm/ProductManagementPage';
import type { Product } from './types';

interface CrmAppProps {
    onLaunchEcomm: () => void;
    products: Product[];
    onAddProduct: (product: Omit<Product, 'id'>) => void;
    onUpdateProduct: (product: Product) => void;
    onDeleteProduct: (productId: number) => void;
}

type CrmView = 'dashboard' | 'products';

export const CrmApp: React.FC<CrmAppProps> = ({ onLaunchEcomm, products, onAddProduct, onUpdateProduct, onDeleteProduct }) => {
    const [view, setView] = useState<CrmView>('dashboard');

    const renderContent = () => {
        switch (view) {
            case 'dashboard':
                return (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {METRICS_DATA.map((metric, index) => (
                                <DashboardCard key={index} {...metric} />
                            ))}
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
                            <div className="lg:col-span-3">
                                <SalesChart data={SALES_DATA} />
                            </div>
                            <div className="lg:col-span-2">
                                <InsightGenerator />
                            </div>
                        </div>
                        <div className="mt-6">
                            <RecentCustomersTable customers={RECENT_CUSTOMERS} />
                        </div>
                    </>
                );
            case 'products':
                return (
                    <ProductManagementPage
                        products={products}
                        onAddProduct={onAddProduct}
                        onUpdateProduct={onUpdateProduct}
                        onDeleteProduct={onDeleteProduct}
                    />
                );
            default:
                return <div>Page not found</div>;
        }
    };
    
    return (
        <div className="flex h-screen bg-base-bg text-text-primary">
            <Sidebar onNavigate={setView} onLaunchEcomm={onLaunchEcomm}/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-base-bg p-6 lg:p-8">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};