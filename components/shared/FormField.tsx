import React from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string;
  error?: string;
  as?: 'input' | 'textarea' | 'select';
  options?: { label: string; value: string }[];
}

export const FormField = React.forwardRef<HTMLElement, FormFieldProps>(
  ({ label, error, className, as = 'input', options, ...props }, ref) => {
    const baseClasses = cn(
      "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-colors",
      error ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-brand-blue",
      className
    );

    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-semibold text-gray-700">
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
        
        {as === 'textarea' ? (
          <textarea
            className={cn(baseClasses, "resize-y min-h-[120px]")}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : as === 'select' ? (
          <select
            className={baseClasses}
            ref={ref as React.Ref<HTMLSelectElement>}
            {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
          >
            <option value="" disabled>Select {label}</option>
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        ) : (
          <input
            className={baseClasses}
            ref={ref as React.Ref<HTMLInputElement>}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        
        {error && (
          <p className="text-sm text-red-500 font-medium">{error}</p>
        )}
      </div>
    );
  }
);
FormField.displayName = 'FormField';
