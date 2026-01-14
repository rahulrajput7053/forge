import type React from 'react';

export interface Customer {
  id: string;
  name: string;
  email: string;
  avatar: string;
  // Fix: Added 'Inquiry' to the status type to allow for new customer inquiries from the e-commerce contact form.
  status: 'Active' | 'Inactive' | 'Inquiry';
  plan: 'Pro' | 'Basic' | 'Standard' | 'Inquiry';
}

export interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface SalesData {
  name: string;
  revenue: number;
  profit: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    offerPrice?: number;
    imageUrl: string;
    category: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface Order {
    id: string;
    date: string;
    total: number;
    status: 'Delivered' | 'Processing' | 'Cancelled';
    items: CartItem[];
}