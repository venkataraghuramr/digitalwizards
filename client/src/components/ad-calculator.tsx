
import { useState } from 'react';
import { Button } from './ui/button';

export default function AdCalculator() {
  const [budget, setBudget] = useState('1000');
  const [industry, setIndustry] = useState('ecommerce');
  
  const calculateEstimates = () => {
    const budgetNum = parseFloat(budget);
    const estimates = {
      clicks: Math.round(budgetNum * (industry === 'ecommerce' ? 0.5 : 0.7)),
      impressions: Math.round(budgetNum * (industry === 'ecommerce' ? 100 : 150)),
      conversions: Math.round(budgetNum * (industry === 'ecommerce' ? 0.02 : 0.03))
    };
    return estimates;
  };

  const estimates = calculateEstimates();

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Ad Campaign Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Monthly Budget ($)</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Industry</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="ecommerce">E-commerce</option>
            <option value="b2b">B2B</option>
            <option value="services">Services</option>
          </select>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-purple-50 rounded">
            <div className="text-2xl font-bold text-purple-600">{estimates.clicks}</div>
            <div className="text-sm text-gray-600">Est. Monthly Clicks</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded">
            <div className="text-2xl font-bold text-purple-600">{estimates.impressions}</div>
            <div className="text-sm text-gray-600">Est. Impressions</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded">
            <div className="text-2xl font-bold text-purple-600">{estimates.conversions}</div>
            <div className="text-sm text-gray-600">Est. Conversions</div>
          </div>
        </div>
      </div>
    </div>
  );
}
