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
  const projectDirectory = options.path;
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

export default async function (tree: Tree, options: TopicGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  const { projectRoot } = normalizedOptions;

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    projectRoot,
    {
      ...normalizedOptions,
      ...names(normalizedOptions.name),
      offsetFromRoot: offsetFromRoot(projectRoot),
      template: '',
    }
  );

  await formatFiles(tree);
} 