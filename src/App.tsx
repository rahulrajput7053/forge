import { useState } from "react";
import EcommApp from "./EcommApp";
import CrmApp from "./CrmApp";

type AppView = "ecomm" | "crm";

export default function App() {
  const [view, setView] = useState<AppView>("ecomm");

  return (
    <div style={{ background: "#111", color: "white", minHeight: "100vh", padding: "20px" }}>
      <h1>Forge Fabric</h1>

      <div style={{ marginBottom: "16px" }}>
        <button onClick={() => setView("ecomm")}>E-Commerce</button>{" "}
        <button onClick={() => setView("crm")}>CRM</button>
      </div>

      {view === "ecomm" ? <EcommApp /> : <CrmApp />}
    </div>
  );
}
