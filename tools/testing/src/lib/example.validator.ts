import { Type } from "@angular/core";

interface ComponentStats {
  size: number;
  dependencies: number;
}

function getComponentBundleStats(component: Type<unknown>): ComponentStats {
  // Get component metadata
  const metadata = (component as any).__annotations__?.[0] || {};
  
  // Calculate approximate bundle size from template and styles
  const templateSize = metadata.template?.length || 0;
  const stylesSize = metadata.styles?.reduce((acc: number, style: string) => acc + style.length, 0) || 0;
  
  // Count dependencies from imports
  const dependencies = metadata.imports?.length || 0;
  
  return {
    size: templateSize + stylesSize,
    dependencies
  };
}

export function validateExample(component: Type<unknown>): void {
  const stats = getComponentBundleStats(component);
  
  if (stats.size > 100_000) {
    throw new Error(`Bundle size exceeded 100KB: ${stats.size} bytes`);
  }
  
  if (stats.dependencies > 15) {
    throw new Error(`Dependency count exceeded 15: ${stats.dependencies}`);
  }
}