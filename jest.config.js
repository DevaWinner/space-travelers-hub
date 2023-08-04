module.exports = {
  testPathIgnorePatterns: ['./node_modules'],
  "type": "module",
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
