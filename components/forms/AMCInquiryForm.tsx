'use client';

import { useState } from 'react';
import { FormField } from '../shared/FormField';

export const AMCInquiryForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="p-8 text-center bg-soft-bg rounded-xl">
        <h3 className="text-xl font-bold text-primary">AMC Inquiry Received!</h3>
        <p className="mt-2 text-primary">Our maintenance team will schedule an inspection shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Name / Company Name" required />
        <FormField label="Phone Number" required />
      </div>
      <FormField label="Email" type="email" required />
      <FormField 
        label="Existing System Type" 
        as="select" 
        required
        options={[
          { label: 'RO Plant', value: 'ro' },
          { label: 'ETP/STP', value: 'etpstp' },
          { label: 'Water Softener', value: 'softener' },
          { label: 'Other', value: 'other' },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <FormField label="Capacity (If known)" />
        <FormField label="Installation Year" />
      </div>
      <FormField label="Current Issues (if any) / Remarks" as="textarea" />
      <button type="submit" disabled={status === 'submitting'} className="w-full bg-green-accent text-white py-4 rounded-lg font-bold hover:bg-opacity-90 transition">
        {status === 'submitting' ? 'Submitting...' : 'Request AMC Visit'}
      </button>
    </form>
  );
};
