import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'steuerbot',
      sourcemap: true,
    },
    {
      file: pkg.main.replace('.js', '.min.js'),
      format: 'umd',
      name: 'steuerbot',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  watch: {
    include: 'src/**',
  },
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    commonJS({
      include: /node_modules/,
      namedExports: {
        'file-saver': ['saveAs'],
      },
    }),
    resolve({
      browser: true,
    }),
    terser({
      include: [/^.+\.min\.js$/],
    }),
  ],
};
