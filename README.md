# React Module Federation Boilerplate

Boilerplate for React micro frontend project with Module Federation.

## Stack

- react
- typescript
- webpack
- eslint
- babel
- prettier
- jest
- styled-component

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

- `PORT`: specific port to run in the local environment.

## Run Locally

Clone the project

```bash
git clone git@github.com:ilumin/mf-boilerplate.git project-dir
```

Go to the project directory

```bash
cd project-dir
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run start:live
```

Then we can open app with <http://localhost:8080> and open `remoteEntry.js` with <http://localhost:8080/remoteEntry.js>

## Module Federation Config

Module Federation configurations is located in `webpack-mf.config.js`

```js
module.exports = new ModuleFederationPlugin({
  name: 'base_mf_boilerplate',
  filename: 'remoteEntry.js',
  remotes: {
    app1: 'app1@http://localhost:8081/remoteEntry.js',
  },
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
```

List of configuration

- `name` - Name of the federated module uses as a reference.
- `filename` - Name of the file Webpack going to bundle and share across micro frontend
- `remotes` - Key value of a federated module we need to use in our project
- `exposes` - Key value of a module we want to share as a federated module across micro frontend
- `shared` - Key value of a package name to exclude from a bundle file
