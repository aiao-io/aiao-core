import { resolve } from 'path';
import { cwd } from 'process';

import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-library-demo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    }
  ],
  copy: [
    {
      src: resolve(cwd(), 'node_modules/@ionic/core'),
      dest: resolve(cwd(), 'apps/stencil-library-demo/vendors/ionic')
    }
  ],
  tsconfig: 'tsconfig.json',
  preamble: '(C) Aiao',
  globalScript: 'src/lib/global/global.ts'
};
