import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['./src/index.tsx'],
  outfile: './dist/index.js',
  bundle: true,
  format: 'esm',
  external: ['react'],
  platform: 'neutral',
  target: 'es2016',
  minify: true,
});
