
import React, { useState, useEffect } from 'react';
import { CrmApp } from './CrmApp';
import EcommApp from './EcommApp';
import { INITIAL_PRODUCTS } from './constants';
import type { Product } from './types';
import './index.css';

type AppView = 'crm' | 'ecomm';

function App() {
  const [view, setView] = useState<AppView>('ecomm');
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  useEffect(() => {
    document.title = view === 'crm' ? 'InsightCRM' : 'Forge Fabric';
  }, [view]);

  const showCrm = () => setView('crm');
  const showEcomm = () => setView('ecomm');
  
  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now(), // Generate a unique ID
    };
    setProducts(prevProducts => [newProduct, ...prevProducts]);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(prevProducts =>
      prevProducts.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
  };

  return (
    <div className="App">
        {view === 'crm' && (
            <CrmApp
                onLaunchEcomm={showEcomm}
                products={products}
                onAddProduct={handleAddProduct}
                onUpdateProduct={handleUpdateProduct}
                onDeleteProduct={handleDeleteProduct}
            />
        )}
        {view === 'ecomm' && <EcommApp onBackToCrm={showCrm} products={products} />}
    </div>
  );
}

export default App;