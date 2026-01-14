import type React from 'react';
import type { MetricCardProps } from '../types';

// Fix: Destructure and rename 'icon' prop to 'Icon' and render it as a component, as it is now a component reference.
export const DashboardCard: React.FC<MetricCardProps> = ({ title, value, change, changeType, icon: Icon }) => {
  const changeColor = changeType === 'increase' ? 'text-green-400' : 'text-red-400';

  return (
    <div className="bg-component-bg border border-border-color rounded-xl p-6 shadow-sm hover:border-accent/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-text-secondary">{title}</p>
        <div className="text-text-secondary"><Icon /></div>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-text-primary">{value}</h3>
        <p className={`text-xs mt-1 ${changeColor}`}>{change}</p>
      </div>
    </div>
  );
};
