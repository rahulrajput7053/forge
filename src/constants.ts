
import React from 'react';
import {
  DollarSignIcon,
  UsersIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
} from './components/IconComponents';
import type { Customer, MetricCardProps, SalesData, Product } from './types';

export const METRICS_DATA: MetricCardProps[] = [
  {
    title: 'Monthly Revenue',
    value: '₹1,28,430.00',
    change: '+12.5% vs last month',
    changeType: 'increase',
    icon: DollarSignIcon,
  },
  {
    title: 'Customer Growth',
    value: '4,892',
    change: '+15.2% vs last month',
    changeType: 'increase',
    icon: UsersIcon,
  },
  {
    title: 'Total Orders',
    value: '1,240',
    change: '+8.1% vs last month',
    changeType: 'increase',
    icon: ShoppingCartIcon,
  },
  {
    title: 'Conversion Rate',
    value: '3.42%',
    change: '+0.5% vs yesterday',
    changeType: 'increase',
    icon: TrendingUpIcon,
  },
];

export const SALES_DATA: SalesData[] = [
  { name: 'Jan', revenue: 45000, profit: 12000 },
  { name: 'Feb', revenue: 52000, profit: 15000 },
  { name: 'Mar', revenue: 48000, profit: 14000 },
  { name: 'Apr', revenue: 61000, profit: 18000 },
  { name: 'May', revenue: 55000, profit: 16000 },
  { name: 'Jun', revenue: 72000, profit: 22000 },
  { name: 'Jul', revenue: 85000, profit: 26000 },
];

export const RECENT_CUSTOMERS: Customer[] = [
    { id: '1', name: 'Aarav Sharma', email: 'aarav@foomer.in', avatar: 'https://i.pravatar.cc/150?u=aarav', status: 'Active', plan: 'Pro' },
    { id: '2', name: 'Zoya Khan', email: 'zoya@foomer.in', avatar: 'https://i.pravatar.cc/150?u=zoya', status: 'Active', plan: 'Basic' },
    { id: '3', name: 'Rohan Gupta', email: 'rohan@foomer.in', avatar: 'https://i.pravatar.cc/150?u=rohan', status: 'Inactive', plan: 'Standard' },
    { id: '4', name: 'Ananya Iyer', email: 'ananya@foomer.in', avatar: 'https://i.pravatar.cc/150?u=ananya', status: 'Active', plan: 'Pro' },
    { id: '5', name: 'Kabir Singh', email: 'kabir@foomer.in', avatar: 'https://i.pravatar.cc/150?u=kabir', status: 'Inactive', plan: 'Inquiry' },
];

export const INITIAL_PRODUCTS: Product[] = [
    { id: 1, name: 'Core Oversized Tee - Onyx', price: 1499, offerPrice: 1299, imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800', category: 'T-Shirts' },
    { id: 2, name: 'Vintage Wash Denim', price: 3499, imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800', category: 'Denim' },
    { id: 3, name: 'Heavyweight Hoodie - Slate', price: 2999, offerPrice: 2499, imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800', category: 'Outerwear' },
    { id: 4, name: 'Tech Cargo Pants', price: 2799, imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800', category: 'Bottoms' },
    { id: 5, name: 'Urban Runner V2', price: 4599, offerPrice: 3999, imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800', category: 'Footwear' },
    { id: 6, name: 'Distressed Trucker Cap', price: 999, imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800', category: 'Accessories' },
    { id: 7, name: 'Graphic Series: Neo-Tokyo', price: 1799, imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800', category: 'T-Shirts' },
    { id: 8, name: 'Leather Utility Bag', price: 5499, offerPrice: 4899, imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb94c6a62?auto=format&fit=crop&q=80&w=800', category: 'Accessories' },
];
