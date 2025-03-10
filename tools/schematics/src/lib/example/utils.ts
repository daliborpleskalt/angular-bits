import { Rule, Tree, SchematicsException } from '@angular-devkit/schematics';
import { Schema } from './schema';

export function updateRoutes(options: Schema): Rule {
  return (tree: Tree) => {
    const routesPath = 'apps/showcase/src/app/app.routes.ts';
    
    const content = tree.read(routesPath);
    if (!content) {
      throw new SchematicsException(`Routes file ${routesPath} not found`);
    }

    const contentText = content.toString();
    const routesStart = contentText.indexOf('export const appRoutes: Route[] = [');
    if (routesStart === -1) {
      throw new SchematicsException('No routes array found');
    }

    // Find the position after the first route (home route)
    const firstRouteEnd = contentText.indexOf('},', routesStart);
    if (firstRouteEnd === -1) {
      throw new SchematicsException('Could not find position to insert new route');
    }

    const topicRoute = `
  {
    path: '${options.category}/${options.name}',
    loadComponent: () =>
      import('${getImportPath(options)}/${options.name}/demo/${options.name}-demo.component')
        .then(m => m.${options.name}DemoComponent)
  },`;

    const updatedContent = contentText.slice(0, firstRouteEnd + 2) +
      topicRoute +
      contentText.slice(firstRouteEnd + 2);

    tree.overwrite(routesPath, updatedContent);
    return tree;
  };
}

function getImportPath(options: Schema): string {
  // Convert file system path to import path
  const basePath = options.path.replace(/^.*?\/(libs|apps)\//, '@angular-bits/');
  return basePath.replace(/\/src\/lib$/, '');
} 