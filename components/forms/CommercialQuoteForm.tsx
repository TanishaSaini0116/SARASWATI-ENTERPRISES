'use client';

import { useState } from 'react';
import { FormField } from '../shared/FormField';

export const CommercialQuoteForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="p-8 text-center bg-green-50 rounded-xl">
        <h3 className="text-xl font-bold text-green-800">Quote Request Received!</h3>
        <p className="mt-2 text-green-700">We will get back to you with a competitive quote.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Organization/Institution Name" required />
        <FormField label="Contact Person" required />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Email" type="email" required />
        <FormField label="Phone Number" required />
      </div>
      <FormField 
        label="Establishment Type" 
        as="select" 
        required
        options={[
          { label: 'Hospital/Healthcare', value: 'hospital' },
          { label: 'Hotel/Restaurant', value: 'hotel' },
          { label: 'School/College', value: 'school' },
          { label: 'Office/Corporate', value: 'office' },
          { label: 'Other', value: 'other' },
        ]}
      />
      <FormField 
        label="Product of Interest" 
        as="select" 
        required
        options={[
          { label: 'Commercial RO System', value: 'ro' },
          { label: 'Water Softener', value: 'softener' },
          { label: 'Commercial STP', value: 'stp' },
          { label: 'UV Purification', value: 'uv' },
        ]}
      />
      <FormField label="Estimated Daily Water Usage (Liters) / Number of People" required />
      <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-blue text-white py-4 rounded-lg font-bold hover:bg-opacity-90 transition">
        {status === 'submitting' ? 'Submitting...' : 'Request Quote'}
      </button>
    </form>
  );
};
