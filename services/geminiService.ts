import { GoogleGenAI } from "@google/genai";
import { METRICS_DATA, RECENT_CUSTOMERS, SALES_DATA } from "../constants";

// Fix: Implemented a real Gemini API call to generate weekly summaries.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Calls the Gemini API to get a weekly summary based on dashboard data.
 */
export const getWeeklySummary = async (): Promise<string> => {
  console.log("Calling Gemini API...");

  // Prepare data for the prompt, removing non-serializable parts like component functions.
  const metricsForApi = METRICS_DATA.map(({ icon, ...rest }) => ({
    ...rest,
    icon: icon.name, // Send the icon component's name as a string for context.
  }));

  const prompt = `
Based on the following dashboard data, provide a weekly performance review.

Data:
\`\`\`json
${JSON.stringify({ metrics: metricsForApi, sales: SALES_DATA, customers: RECENT_CUSTOMERS }, null, 2)}
\`\`\`

Your response must be in Markdown and include:
- A title, like "**Weekly Performance Review: Key Insights**".
- Bulleted key insights. Each bullet must start with '*'.
- A final "Recommendation" section.
  `;
  
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    const summary = response.text;
    console.log("Gemini response received.");
    return summary;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get summary from Gemini API.");
  }
};
