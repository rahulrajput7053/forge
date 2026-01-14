import React from 'react';
import {
  DollarSignIcon,
  UsersIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
} from './components/IconComponents';
import type { Customer, MetricCardProps, SalesData, Product } from './types';

// Fix: Simplified the type definition for METRICS_DATA to MetricCardProps[] for better type inference and to fix type errors.
export const METRICS_DATA: MetricCardProps[] = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1% from last month',
    changeType: 'increase',
    icon: DollarSignIcon,
  },
  {
    title: 'Subscriptions',
    value: '+2350',
    change: '+180.1% from last month',
    changeType: 'increase',
    icon: UsersIcon,
  },
  {
    title: 'Sales',
    value: '+12,234',
    change: '+19% from last month',
    changeType: 'increase',
    icon: ShoppingCartIcon,
  },
  {
    title: 'Active Now',
    value: '+573',
    change: '+201 since last hour',
    changeType: 'increase',
    icon: TrendingUpIcon,
  },
];

export const SALES_DATA: SalesData[] = [
  { name: 'Jan', revenue: 4000, profit: 2400 },
  { name: 'Feb', revenue: 3000, profit: 1398 },
  { name: 'Mar', revenue: 2000, profit: 9800 },
  { name: 'Apr', revenue: 2780, profit: 3908 },
  { name: 'May', revenue: 1890, profit: 4800 },
  { name: 'Jun', revenue: 2390, profit: 3800 },
  { name: 'Jul', revenue: 3490, profit: 4300 },
];

export const RECENT_CUSTOMERS: Customer[] = [
    { id: '1', name: 'Olivia Martin', email: 'olivia.martin@email.com', avatar: 'https://picsum.photos/seed/1/40/40', status: 'Active', plan: 'Pro' },
    { id: '2', name: 'Jackson Lee', email: 'jackson.lee@email.com', avatar: 'https://picsum.photos/seed/2/40/40', status: 'Active', plan: 'Basic' },
    { id: '3', name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', avatar: 'https://picsum.photos/seed/3/40/40', status: 'Inactive', plan: 'Standard' },
    { id: '4', name: 'William Kim', email: 'will@email.com', avatar: 'https://picsum.photos/seed/4/40/40', status: 'Active', plan: 'Pro' },
    { id: '5', name: 'Sofia Davis', email: 'sofia.davis@email.com', avatar: 'https://picsum.photos/seed/5/40/40', status: 'Inactive', plan: 'Inquiry' },
];

export const INITIAL_PRODUCTS: Product[] = [
    { id: 1, name: 'Classic Tee', price: 29.99, offerPrice: 19.99, imageUrl: 'https://picsum.photos/seed/p1/400/400', category: 'Apparel' },
    { id: 2, name: 'Slim Fit Jeans', price: 89.99, imageUrl: 'https://picsum.photos/seed/p2/400/400', category: 'Denim' },
    { id: 3, name: 'Hoodie Sweatshirt', price: 59.99, offerPrice: 49.99, imageUrl: 'https://picsum.photos/seed/p3/400/400', category: 'Apparel' },
    { id: 4, name: 'Leather Jacket', price: 199.99, imageUrl: 'https://picsum.photos/seed/p4/400/400', category: 'Outerwear' },
    { id: 5, name: 'Running Sneakers', price: 129.99, offerPrice: 99.99, imageUrl: 'https://picsum.photos/seed/p5/400/400', category: 'Footwear' },
    { id: 6, name: 'Beanie Hat', price: 24.99, imageUrl: 'https://picsum.photos/seed/p6/400/400', category: 'Accessories' },
    { id: 7, name: 'Graphic T-Shirt', price: 34.99, imageUrl: 'https://picsum.photos/seed/p7/400/400', category: 'Apparel' },
    { id: 8, name: 'Canvas Backpack', price: 79.99, offerPrice: 64.99, imageUrl: 'https://picsum.photos/seed/p8/400/400', category: 'Accessories' },
];