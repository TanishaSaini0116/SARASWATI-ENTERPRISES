'use client';

import { useState } from 'react';
import { FormField } from '../shared/FormField';

export const IndustrialRFQForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="p-8 text-center bg-soft-bg rounded-xl">
        <h3 className="text-xl font-bold text-primary">RFQ Submitted!</h3>
        <p className="mt-2 text-primary">Our engineering team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Company Name" required />
        <FormField label="Contact Person" required />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Email" type="email" required />
        <FormField label="Phone Number" required />
      </div>
      <FormField 
        label="Required System" 
        as="select" 
        required
        options={[
          { label: 'Industrial RO Plant', value: 'ro' },
          { label: 'Effluent Treatment Plant (ETP)', value: 'etp' },
          { label: 'Sewage Treatment Plant (STP)', value: 'stp' },
          { label: 'Demineralization (DM) Plant', value: 'dm' },
          { label: 'Other', value: 'other' },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Required Capacity (LPH/KLD)" required />
        <FormField label="Feed Water Source" placeholder="e.g. Borewell, River, Municipal" required />
      </div>
      <FormField label="Additional Requirements / Water Analysis Details" as="textarea" />
      <button type="submit" disabled={status === 'submitting'} className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-opacity-90 transition">
        {status === 'submitting' ? 'Submitting RFQ...' : 'Submit Request for Quotation'}
      </button>
    </form>
  );
};
