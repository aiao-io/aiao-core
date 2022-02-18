// import { build } from 'tsup';

import { ExecutorContext } from '@nrwl/devkit';

import { BuildExecutorSchema } from './schema';

export async function buildExecutor(options: BuildExecutorSchema, context: ExecutorContext) {
  console.log('options', options);
  console.log('context', context);

  const { sourceRoot, root } = context.workspace.projects[context.projectName!];
  if (!sourceRoot) {
    throw new Error(`${context.projectName} does not have a sourceRoot.`);
  }
  if (!root) {
    throw new Error(`${context.projectName} does not have a root.`);
  }

  // await build({
  //   entry: ['aaa/src/index.ts'],
  //   format: ['cjs', 'esm'],
  //   dts: { resolve: true },
  //   sourcemap: true,
  //   outDir: 'aaa-dist'
  // });

  return {
    success: true
  };
}

export default buildExecutor;
