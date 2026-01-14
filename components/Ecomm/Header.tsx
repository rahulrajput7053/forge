
import React from 'react';
// Fix: Added ArrowLeftIcon to imports
import { LogoIcon, ShoppingCartIcon, ArrowLeftIcon } from '../IconComponents';

type EcommPage = 'home' | 'shop' | 'contact' | 'cart' | 'orders' | 'payment';

interface EcommHeaderProps {
    onNavigate: (page: EcommPage) => void;
    cartItemCount: number;
    onBackToCrm: () => void;
    activePage: EcommPage;
}

const NavLink: React.FC<{
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ label, isActive, onClick }) => (
    <a
        href="#"
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
        className={`text-sm font-medium transition-colors ${
            isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
        }`}
    >
        {label}
    </a>
);


const EcommHeader: React.FC<EcommHeaderProps> = ({ onNavigate, cartItemCount, onBackToCrm, activePage }) => {
    return (
        <header className="sticky top-0 z-40 bg-base-bg/80 backdrop-blur-sm border-b border-border-color">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center">
                            <LogoIcon className="h-6 w-6 text-accent" />
                            <span className="ml-2 text-lg font-semibold text-text-primary">Forge Fabric</span>
                        </div>
                        <nav className="hidden md:flex items-center gap-6">
                            <NavLink label="Home" isActive={activePage === 'home'} onClick={() => onNavigate('home')} />
                            <NavLink label="Shop" isActive={activePage === 'shop'} onClick={() => onNavigate('shop')} />
                            <NavLink label="Contact Us" isActive={activePage === 'contact'} onClick={() => onNavigate('contact')} />
                             <NavLink label="My Orders" isActive={activePage === 'orders'} onClick={() => onNavigate('orders')} />
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={() => onNavigate('cart')} className="relative p-2 text-text-secondary hover:text-text-primary transition-colors">
                            <ShoppingCartIcon className="w-6 h-6" />
                            {cartItemCount > 0 && (
                                <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-accent text-white text-xs font-medium text-center leading-4">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                        <div className="w-px h-6 bg-border-color"></div>
                        <button onClick={onBackToCrm} className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                             <ArrowLeftIcon className="w-4 h-4" />
                             Back to CRM
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default EcommHeader;
