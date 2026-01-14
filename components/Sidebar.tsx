import React from 'react';
import { LogoIcon, HomeIcon, UsersIcon, PackageIcon, SettingsIcon } from './IconComponents';

interface SidebarProps {
    onNavigate: (view: 'dashboard' | 'products') => void;
    onLaunchEcomm: () => void;
}

const NavItem: React.FC<{
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    active?: boolean;
    onClick?: () => void;
}> = ({ icon: Icon, label, active, onClick }) => (
    <a
        href="#"
        onClick={(e) => {
            e.preventDefault();
            onClick?.();
        }}
        className={`flex items-center px-4 py-2.5 rounded-lg transition-colors ${
            active ? 'bg-accent text-white' : 'text-text-secondary hover:bg-component-bg hover:text-text-primary'
        }`}
    >
        <Icon className="w-5 h-5 mr-3" />
        <span className="font-medium">{label}</span>
    </a>
);

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate, onLaunchEcomm }) => {
    // This state would be managed by a higher-level component in a real app
    const [activeView, setActiveView] = React.useState('dashboard');

    const handleNav = (view: 'dashboard' | 'products') => {
        setActiveView(view);
        onNavigate(view);
    };

    return (
        <aside className="w-64 flex-shrink-0 bg-base-bg border-r border-border-color flex flex-col">
            <div className="h-16 border-b border-border-color flex items-center px-6">
                <LogoIcon className="h-7 w-7 text-accent" />
                <span className="ml-3 text-xl font-bold text-text-primary">Admin Panel</span>
            </div>
            <nav className="flex-grow px-4 py-6 space-y-2">
                <NavItem icon={HomeIcon} label="Dashboard" active={activeView === 'dashboard'} onClick={() => handleNav('dashboard')} />
                <NavItem icon={UsersIcon} label="Customers" />
                <NavItem icon={PackageIcon} label="Products" active={activeView === 'products'} onClick={() => handleNav('products')}/>
                <NavItem icon={SettingsIcon} label="Settings" />
            </nav>
            <div className="p-4 border-t border-border-color">
                <button
                    onClick={onLaunchEcomm}
                    className="w-full bg-accent/20 text-accent font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                    Launch E-commerce
                </button>
            </div>
        </aside>
    );
};
