const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('./package.json').dependencies

module.exports = new ModuleFederationPlugin({
  name: 'base_boilerplate',
  filename: 'remoteEntry.js',
  remotes: {},
  exposes: {
    './App': './src/App.tsx',
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
})
