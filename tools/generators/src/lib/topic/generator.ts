import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  offsetFromRoot,
} from '@nx/devkit';
import * as path from 'path';
import { TopicGeneratorSchema } from './schema';

interface NormalizedSchema extends TopicGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedName: ReturnType<typeof names>;
}

function normalizeOptions(tree: Tree, options: TopicGeneratorSchema): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = 'libs/topics/src/lib/topics';
  const projectName = name;
  const projectRoot = `${projectDirectory}/${name}`;
  const parsedName = names(options.name);

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedName,
  };
}

function updateTopicsExports(tree: Tree, options: NormalizedSchema) {
  const indexPath = 'libs/topics/src/index.ts';
  const content = tree.read(indexPath);
  const exportStatements = [
    `export * from './lib/topics/${options.name}/${options.name}.component';`,
    `export * from './lib/topics/${options.name}/demo/${options.name}-demo.component';`,
  ].join('\n') + '\n';

  if (!content) {
    tree.write(indexPath, exportStatements);
    return;
  }

  const contentText = content.toString();
  tree.write(indexPath, contentText + exportStatements);
}

export default async function (tree: Tree, options: TopicGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);

  // Generate main topic component
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    normalizedOptions.projectRoot,
    {
      ...normalizedOptions,
      ...names(normalizedOptions.name),
      offsetFromRoot: offsetFromRoot(normalizedOptions.projectRoot),
      template: '',
    }
  );

  // Generate demo component
  generateFiles(
    tree,
    path.join(__dirname, 'demo-files'),
    `${normalizedOptions.projectRoot}/demo`,
    {
      ...normalizedOptions,
      ...names(normalizedOptions.name),
      offsetFromRoot: offsetFromRoot(`${normalizedOptions.projectRoot}/demo`),
      template: '',
    }
  );

  updateTopicsExports(tree, normalizedOptions);
  await formatFiles(tree);
} 