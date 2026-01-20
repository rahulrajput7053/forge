// import { useState, useEffect } from "react";
// import CrmApp from "./CrmApp";
// import EcommApp from "./EcommApp";
// import { INITIAL_PRODUCTS } from "./constants";
// import type { Product } from "./types";
// import "./index.css";

// type AppView = "crm" | "ecomm";

// export default function App() {
//   const [view, setView] = useState<AppView>("ecomm");
//   const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS ?? []);

//   useEffect(() => {
//     document.title =
//       view === "crm"
//         ? "InsightCRM | Admin"
//         : "Forge Fabric | Streetwear";
//   }, [view]);

//   const showCrm = () => setView("crm");
//   const showEcomm = () => setView("ecomm");

//   const handleAddProduct = (productData: Omit<Product, "id">) => {
//     const newProduct: Product = {
//       ...productData,
//       id: Date.now(),
//     };
//     setProducts((prev) => [newProduct, ...prev]);
//   };

//   const handleUpdateProduct = (updatedProduct: Product) => {
//     setProducts((prev) =>
//       prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
//     );
//   };

//   const handleDeleteProduct = (productId: number) => {
//     setProducts((prev) => prev.filter((p) => p.id !== productId));
//   };

//   return (
//     <div className="font-sans selection:bg-accent selection:text-white">
//       {view === "crm" ? (
//         <CrmApp
//           onLaunchEcomm={showEcomm}
//           products={products}
//           onAddProduct={handleAddProduct}
//           onUpdateProduct={handleUpdateProduct}
//           onDeleteProduct={handleDeleteProduct}
//         />
//       ) : (
//         <EcommApp
//           onBackToCrm={showCrm}
//           products={products}
//         />
//       )}
//     </div>
//   );
// }
export default function App() {
  return (
    <div style={{ background: "white", color: "black", padding: "40px" }}>
      <h1>✅ React is rendering</h1>
      <p>If you see this, the problem is inside your components.</p>
    </div>
  );
}

