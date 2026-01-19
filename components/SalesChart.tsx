
import React from 'react';
import type { SalesData } from '../types';

// The Recharts library is loaded from a CDN and available on the window object.
declare const window: any;

interface SalesChartProps {
  data: SalesData[];
}

export const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  const Recharts = window.Recharts;

  if (!Recharts || !Recharts.LineChart) {
    return (
      <div className="bg-component-bg border border-border-color rounded-xl p-6 h-[400px] flex items-center justify-center">
        <p className="text-text-secondary">Chart library not available.</p>
      </div>
    );
  }

  const { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } = Recharts;

  return (
    <div className="bg-component-bg border border-border-color rounded-xl p-6 h-[400px]">
      <h3 className="text-lg font-semibold text-text-primary mb-4">Sales Overview</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
          <XAxis dataKey="name" stroke="#a0a0a0" fontSize={12} />
          <YAxis stroke="#a0a0a0" fontSize={12} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
            labelStyle={{ color: '#f0f0f0' }}
          />
          <Legend wrapperStyle={{fontSize: "14px"}}/>
          <Line type="monotone" dataKey="revenue" stroke="#34C759" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="profit" stroke="#007aff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
