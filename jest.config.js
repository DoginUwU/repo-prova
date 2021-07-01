module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: ["js", "vue"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  collectCoverage: false,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!**/node_modules/**",
    "!src/main.js",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      lines: 100,
      functions: 100,
      statements: 100,
    },
  },
};
