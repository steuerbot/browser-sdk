module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!__tests__/**'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  setupFiles: [],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
