export interface Schema {
  name: string;
  path: string;
  project: string;
  module?: string;
  category: 'component' | 'directive' | 'service' | 'pipe';
  tags?: string[];
  skipTests?: boolean;
  skipDemo?: boolean;
} 