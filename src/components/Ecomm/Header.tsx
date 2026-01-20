
import React from 'react';
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
        className={`text-xs font-black uppercase tracking-widest transition-all duration-200 py-1 ${
            isActive ? 'text-accent border-b-2 border-accent' : 'text-text-secondary hover:text-text-primary'
        }`}
    >
        {label}
    </a>
);


const EcommHeader: React.FC<EcommHeaderProps> = ({ onNavigate, cartItemCount, onBackToCrm, activePage }) => {
    return (
        <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-12">
                        <div 
                            className="flex items-center cursor-pointer group"
                            onClick={() => onNavigate('home')}
                        >
                            <LogoIcon className="h-7 w-7 text-accent group-hover:scale-110 transition-transform" />
                            <span className="ml-2 text-xl font-black tracking-tighter text-white uppercase">Forge</span>
                        </div>
                        <nav className="hidden lg:flex items-center gap-8">
                            <NavLink label="Home" isActive={activePage === 'home'} onClick={() => onNavigate('home')} />
                            <NavLink label="Shop" isActive={activePage === 'shop'} onClick={() => onNavigate('shop')} />
                            <NavLink label="Support" isActive={activePage === 'contact'} onClick={() => onNavigate('contact')} />
                            <NavLink label="Orders" isActive={activePage === 'orders'} onClick={() => onNavigate('orders')} />
                        </nav>
                    </div>

                    <div className="flex items-center gap-6">
                        <button 
                            onClick={onBackToCrm} 
                            className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-accent transition-colors px-3 py-1 border border-white/10 rounded-full"
                        >
                             <ArrowLeftIcon className="w-3 h-3" />
                             Admin
                        </button>
                        <div className="w-px h-6 bg-white/10 hidden md:block"></div>
                        <button 
                            onClick={() => onNavigate('cart')} 
                            className="group relative p-2 text-text-secondary hover:text-white transition-colors"
                        >
                            <ShoppingCartIcon className="w-6 h-6" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-[10px] font-black animate-in fade-in zoom-in duration-300">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default EcommHeader;
