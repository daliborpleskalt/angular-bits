import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  template,
  move,
  chain,
  mergeWith
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';

export function topicSchematic(options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      template({
        ...strings,
        ...options,
        className: strings.classify(options.name),
        fileName: strings.dasherize(options.name)
      }),
      move(options.path)
    ]);

    const rule = chain([
      mergeWith(templateSource),
      updateAppRoutes(options)
    ]);

    return rule(tree, _context);
  };
}

function updateAppRoutes(options: Schema): Rule {
  return (tree: Tree) => {
    const routesPath = 'apps/showcase/src/app/app.routes.ts';
    const content = tree.read(routesPath);
    if (!content) {
      return tree;
    }

    const routeContent = `  {
    path: '${options.category}/${options.name}',
    loadComponent: () => import('@angular-bits/topics/${options.name}').then(m => m.${strings.classify(options.name)}Component)
  },`;

    const contentText = content.toString();
    const routesStart = contentText.indexOf('export const appRoutes: Route[] = [');
    if (routesStart === -1) {
      return tree;
    }

    const firstRouteEnd = contentText.indexOf('},', routesStart);
    if (firstRouteEnd === -1) {
      return tree;
    }

    const updatedContent = contentText.slice(0, firstRouteEnd + 2) +
      '\n' + routeContent +
      contentText.slice(firstRouteEnd + 2);

    tree.overwrite(routesPath, updatedContent);
    return tree;
  };
} 