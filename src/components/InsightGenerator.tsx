
import React, { useState, useCallback } from 'react';
import { getWeeklySummary } from '../services/geminiService';
import { SparkleIcon } from './IconComponents';

export const InsightGenerator: React.FC = () => {
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateSummary = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setSummary('');
    try {
      const result = await getWeeklySummary();
      setSummary(result);
    } catch (err) {
      setError('Failed to generate insights. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  // Format summary text into paragraphs
  const formattedSummary = summary
    .split('\n')
    .map(str => str.trim())
    .filter(str => str.length > 0)
    .map((str, index) => {
        if (str.startsWith('**') && str.endsWith('**')) {
            return <h4 key={index} className="font-semibold text-text-primary mt-4 mb-2">{str.replace(/\*\*/g, '')}</h4>
        }
        if (str.startsWith('*')) {
            return <p key={index} className="text-text-secondary mb-2 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent">{str.substring(1).trim()}</p>
        }
        return <p key={index} className="text-text-secondary mb-2">{str}</p>
    });

  return (
    <div className="bg-component-bg border border-border-color rounded-xl p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-text-primary">AI-Powered Insights</h3>
        <SparkleIcon className="w-6 h-6 text-accent" />
      </div>

      <div className="flex-grow overflow-y-auto pr-2">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-text-secondary">Generating weekly summary...</p>
          </div>
        )}
        {error && <p className="text-red-400 text-center">{error}</p>}
        {!isLoading && !summary && (
           <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-text-secondary">Click the button to generate a weekly performance summary using Gemini.</p>
          </div>
        )}
        {summary && <div className="prose prose-invert max-w-none">{formattedSummary}</div>}
      </div>

      <div className="mt-4 flex-shrink-0">
        <button
          onClick={handleGenerateSummary}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-accent text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 enabled:hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          {isLoading ? (
            'Generating...'
          ) : (
            <>
              <SparkleIcon className="w-5 h-5" />
              Generate Weekly Summary
            </>
          )}
        </button>
      </div>
    </div>
  );
};
