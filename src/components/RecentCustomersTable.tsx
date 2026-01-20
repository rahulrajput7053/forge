
import React from 'react';
import type { Customer } from '../types';

interface RecentCustomersTableProps {
  customers: Customer[];
}

export const RecentCustomersTable: React.FC<RecentCustomersTableProps> = ({ customers }) => {
  return (
    <div className="bg-component-bg border border-border-color rounded-xl p-6">
      <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Customers</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-text-secondary uppercase border-b border-border-color">
            <tr>
              <th scope="col" className="px-6 py-3">
                Customer
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Plan
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-border-color hover:bg-base-bg">
                <td className="px-6 py-4 font-medium text-text-primary whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full" src={customer.avatar} alt={`${customer.name} avatar`} />
                    <div className="pl-3">
                      <div className="font-semibold">{customer.name}</div>
                      <div className="font-normal text-text-secondary">{customer.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    customer.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                  }`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-text-secondary">{customer.plan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
