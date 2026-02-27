// jest.config.cjs
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!uuid)/" // <-- permite que o Jest transpile o uuid
  ]
};