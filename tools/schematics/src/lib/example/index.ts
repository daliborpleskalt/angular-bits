import { Rule, chain, externalSchematic, mergeWith, apply, url, template, move } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { updateRoutes } from './utils';
import { Schema } from './schema';

export function topicSchematic(options: Schema): Rule {
  return chain([
    // Create the main component
    externalSchematic('@nx/angular', 'component', {
      name: options.name,
      style: 'scss',
      module: options.module,
      standalone: true,
      export: true
    }),

    // Create documentation
    mergeWith(
      apply(url('./files'), [
        template({
          ...options,
          ...strings,
          creationDate: new Date().toISOString().split('T')[0]
        }),
        move(`${options.path}/${options.name}`)
      ])
    ),

    // Create test files
    externalSchematic('@nx/angular', 'component-test', {
      name: options.name,
      project: options.project
    }),

    // Create demo files
    mergeWith(
      apply(url('./demo-files'), [
        template({
          ...options,
          ...strings
        }),
        move(`${options.path}/${options.name}/demo`)
      ])
    ),

    // Update routes and exports
    updateRoutes(options)
  ]);
}