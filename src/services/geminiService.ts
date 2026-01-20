import { METRICS_DATA, RECENT_CUSTOMERS, SALES_DATA } from "../constants";

/**
 * Mock Gemini service for frontend (GitHub Pages safe).
 * Real Gemini API must run on backend, not in browser.
 */
export const getWeeklySummary = async (): Promise<string> => {
  console.log("Generating mock AI insights...");

  // Defensive data checks
  const metrics = METRICS_DATA || [];
  const sales = SALES_DATA || [];
  const customers = RECENT_CUSTOMERS || [];

  const metricsForDisplay = metrics.map(({ icon, ...rest }) => ({
    ...rest,
    icon:
      typeof icon === "function"
        ? icon.name || "Icon"
        : "Icon",
  }));

  // ✅ Mock AI-style response
  return `
### 📊 Performance Overview
Forge Fabric showed stable engagement this week with consistent sales momentum across core product lines.

### 🚀 Growth Drivers
* Strong repeat purchases from premium customers
* High engagement with new streetwear drops
* Improved checkout conversion rate

### ⚠️ Critical Actions
* Introduce limited-edition bundles to increase AOV
* Launch loyalty rewards for repeat buyers
* Highlight best-sellers more prominently on the homepage

### ⭐ Insight Score
**78 / 100**
`;
};
