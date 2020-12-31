/**
 * We want test config to match non-test config as much as possible, but require
 * a different modules setting for env for jest to understand import statements
 *
 * @param {false | 'auto'} modules
 * @see https://babeljs.io/docs/en/babel-preset-env#modules
 */
const getPresets = (modules) => [
  [
    '@babel/env',
    {
      modules,
    },
  ],
  [
    '@babel/preset-react',
    { runtime: 'automatic', importSource: '@emotion/react' },
  ],
  '@babel/preset-typescript',
];

const plugins = [
  '@emotion/babel-plugin',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-export-default-from',
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  ['@babel/plugin-transform-parameters', { loose: true }],
];

module.exports = {
  presets: getPresets(false),
  plugins,
  env: {
    test: {
      presets: getPresets('auto'),
      plugins,
    },
  },
};
