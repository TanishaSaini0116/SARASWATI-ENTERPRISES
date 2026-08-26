'use client';

import { useState } from 'react';
import { FormField } from '../shared/FormField';

export const EstimatorForm = () => {
  const [estimate, setEstimate] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy logic for estimator
    const formData = new FormData(e.target as HTMLFormElement);
    const capacity = Number(formData.get('capacity'));
    const system = formData.get('system');
    
    let basePrice = 50000;
    if (system === 'ro-ind') basePrice = 250000;
    if (system === 'stp') basePrice = 500000;
    
    const calculated = basePrice + (capacity * 50);
    setEstimate(`₹${calculated.toLocaleString('en-IN')} - ₹${(calculated * 1.2).toLocaleString('en-IN')}`);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField 
          label="What type of system do you need?" 
          name="system"
          as="select" 
          required
          options={[
            { label: 'Industrial RO Plant', value: 'ro-ind' },
            { label: 'Commercial RO Plant', value: 'ro-com' },
            { label: 'Sewage Treatment Plant (STP)', value: 'stp' },
            { label: 'Effluent Treatment Plant (ETP)', value: 'etp' },
          ]}
        />
        <FormField 
          label="Required Capacity (in LPH or KLD)" 
          name="capacity"
          type="number"
          required 
          placeholder="e.g. 1000"
        />
        <button type="submit" className="w-full bg-accent text-white py-4 rounded-lg font-bold hover:bg-opacity-90 transition">
          Calculate Estimate
        </button>
      </form>

      {estimate && (
        <div className="mt-8 p-6 bg-primary text-white rounded-xl text-center animate-in fade-in slide-in-from-bottom-4">
          <p className="text-sm font-semibold text-green-accent uppercase tracking-wide mb-2">Estimated Budget Range</p>
          <h3 className="text-3xl font-bold">{estimate}*</h3>
          <p className="text-xs text-text-muted mt-4">*This is a rough estimate. Actual cost depends on raw water analysis and site conditions.</p>
        </div>
      )}
    </div>
  );
};
