module.exports = {
  api: {
    input: './api.yaml',
    output: {
      mode: 'tags-split',
      target: 'src/hooks/generated/client.ts',
      schemas: 'src/hooks/generated',
      client: 'react-query',
      prettier: true,
      mock: false,
      override: {
        mutator: {
          path: './src/helpers/custom-client.ts',
          name: 'customInstance',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
};
