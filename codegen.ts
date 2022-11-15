import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/graphql/schema.graphql',
  documents: ['./src/graphql/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/gql/': {
      preset: 'client',
      plugins: [],
    }
  }
}

export default config;
