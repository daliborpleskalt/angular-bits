export interface TopicGeneratorSchema {
  name: string;
  category: 'component' | 'directive' | 'service' | 'pipe';
  skipTests?: boolean;
} 