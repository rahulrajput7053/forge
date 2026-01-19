
import { GoogleGenAI } from "@google/genai";
import { METRICS_DATA, RECENT_CUSTOMERS, SALES_DATA } from "../constants";

/**
 * Calls the Gemini API to get a weekly summary based on dashboard data.
 */
export const getWeeklySummary = async (): Promise<string> => {
  console.log("Generating insights via Gemini 3...");

  // Initialize inside the function to avoid top-level process.env issues during module load
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Defensive data check
  const metrics = METRICS_DATA || [];
  const sales = SALES_DATA || [];
  const customers = RECENT_CUSTOMERS || [];

  const metricsForApi = metrics.map(({ icon, ...rest }) => ({
    ...rest,
    icon: typeof icon === 'function' ? (icon as any).name || 'Icon' : 'Icon',
  }));

  const prompt = `
You are InsightCRM AI, a senior retail analyst for "Forge Fabric", a premium streetwear brand.

Based on the dashboard data provided, generate a sharp, professional performance review.

Current Data:
Metrics: ${JSON.stringify(metricsForApi)}
Sales Trends: ${JSON.stringify(sales)}
Top Customers: ${JSON.stringify(customers.map(c => ({ name: c.name, plan: c.plan })))}

Format your response in Markdown:
1. **Performance Overview**: A 2-sentence executive summary.
2. **Growth Drivers**: 3 bullet points using '*' on what worked this week.
3. **Critical Actions**: 2-3 strategic recommendations to increase average order value (AOV) and customer retention.
4. **Insight Score**: A score out of 100 based on the growth trends.

Keep it punchy, urban, and professional.
  `;
  
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
    });

    if (!response || !response.text) {
        throw new Error("Empty response from AI");
    }

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to generate insights at this moment. Please check your internet connection or try again later.";
  }
};
