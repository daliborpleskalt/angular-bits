export interface TopicGeneratorSchema {
  name: string;
  category: 'component' | 'directive' | 'service' | 'pipe';
  path: string;
  skipTests?: boolean;
} 