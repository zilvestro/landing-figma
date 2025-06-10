import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type React from 'react';

export const badge = cva(
  [
    'inline-block',
    'rounded-full',
    'px-3',
    'py-1',
    'text-xs',
    'uppercase',
    'font-semibold',
    'leading-tight',
  ],
  {
    variants: {
      status: {
        success: ['bg-emerald-500/10', 'text-emerald-500'],
        info: ['bg-blue-500/10', 'text-blue-500'],
        warning: ['bg-amber-500/10', 'text-amber-500'],
        error: ['bg-primary/10', 'text-primary'],
        pending: ['bg-yellow-500/10', 'text-yellow-500'],
        primary: ['bg-primary/10', 'text-primary'],
      },
    },
  }
);

export type BadgeProps = {
  status: VariantProps<typeof badge>['status'];
  children: React.ReactNode;
  className?: string;
};

export function Badge({ status, children, className }: BadgeProps) {
  return <span className={badge({ status, className })}>{children}</span>;
} 