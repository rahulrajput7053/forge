
import React from 'react';
import { LogoIcon } from '../IconComponents';

const EcommFooter: React.FC = () => {
    return (
        <footer className="bg-component-bg border-t border-border-color">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <LogoIcon className="h-6 w-6 text-accent" />
                        <span className="ml-2 text-lg font-semibold text-text-primary">Forge Fabric</span>
                    </div>
                    <p className="text-text-secondary text-sm">&copy; {new Date().getFullYear()} Forge Fabric Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default EcommFooter;
