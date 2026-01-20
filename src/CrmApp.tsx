import InsightGenerator from "./components/InsightGenerator";

export default function CrmApp() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
        CRM Dashboard
      </h2>

      <p style={{ marginBottom: "16px", opacity: 0.8 }}>
        Welcome to InsightCRM – admin panel for Forge Fabric.
      </p>

      <InsightGenerator />
    </div>
  );
}
