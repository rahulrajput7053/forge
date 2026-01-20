
import React from 'react';
import { SearchIcon, BellIcon } from './IconComponents';

export const Header: React.FC = () => {
  return (
    <header className="flex-shrink-0 h-16 bg-base-bg/80 backdrop-blur-sm border-b border-border-color flex items-center justify-between px-6 lg:px-8">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-text-primary">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-64 bg-component-bg border border-border-color rounded-lg pl-10 pr-4 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
        </div>
        <button className="p-2 rounded-full hover:bg-component-bg text-text-secondary hover:text-text-primary transition-colors">
          <BellIcon />
        </button>
        <div className="w-px h-6 bg-border-color"></div>
        <div className="flex items-center gap-3">
             <img className="h-9 w-9 rounded-full" src="https://picsum.photos/id/237/40/40" alt="User" />
             <div>
                <p className="text-sm font-medium text-text-primary">Admin User</p>
                <p className="text-xs text-text-secondary">Administrator</p>
             </div>
        </div>
      </div>
    </header>
  );
};
