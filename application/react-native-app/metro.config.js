/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

const packagesDependencies = {
  react: path.resolve(`${__dirname}/node_modules/react`),
  '@babel/runtime': path.resolve(`${__dirname}/node_modules/@babel/runtime`),
};

const sharePackages = ['hooks', 'store'];

const extraNodeModules = {
  ...packagesDependencies,
  ...sharePackages.reduce((acc, cur) => {
    acc[`packages-${cur}`] = path.resolve(`${__dirname}/../../packages/${cur}`);
    return acc;
  }, {}),
};

const watchFolders = sharePackages.map((v) =>
  path.resolve(`${__dirname}/../../packages/${v}`),
);

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules,
  },
  watchFolders,
};
