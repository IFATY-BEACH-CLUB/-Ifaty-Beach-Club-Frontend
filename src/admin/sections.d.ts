import type { ComponentType } from 'react';

export type AdminSection = {
  key: string;
  label: string;
  path: string;
  component: ComponentType;
};

export const adminSections: AdminSection[];
