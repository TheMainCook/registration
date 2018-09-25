# CrimsonHacks Registration Frontend

This is the frontend for the CrimsonHacks registration system. Written in Vue with `vue-router` for routing and `vue-apollo` for store and remote data retrieval. Please use yarn for package management as it's just better.

## How to install:

First install global dependencies (`vue-cli` is optional but is nice to have with vue development):

```
npm install -g yarn vue-cli graphql-faker
```

Next use yarn to install all packages and peer dependencies:

```
yarn install
```

Run GraphQL mocking server with `graphql-faker`:

```
cd mocking
graphql-faker ./name-test.grphql
```

Run frontend development server with yarn:

```
yarn run serve
```

## Coding Standards

This repo uses `eslint` with the [AirBNB JavaScript Style Guide](https://github.com/airbnb/javascript). We use semicolons as removing them can be ambiguous and confusing. Code should also have documentation comments where appropriate.

## Useful Yarn Commands

### Compile and run development server with hot-reload
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```