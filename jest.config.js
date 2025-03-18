/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'esbuild-jest'
    },
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
  };
  
  export default config;