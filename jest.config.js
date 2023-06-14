// jest.config.js

module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapper: {
   // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    

    "@root/(.*)$": "<rootdir>/$1",
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@common/(.*)$": "<rootDir>/src/components/common/$1",
    "@pages/(.*)$": "<rootdir>/src/components/pages/$1",
    "@icons/(.*)$": "<rootdir>/public/assets/icons/$1*",
    "tests/(.*)": "<rootDir>/__tests__/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};

// // Jest.config.js
// const customConfig = {
//   // Automatically clear mock calls and instances between every test
//   clearMocks: true,
//   // The directory where Jest should output its coverage files
//   coverageDirectory: ".coverage",
//   // A list of paths to modules that run some code to configure or set up the testing framework before each test
//   setupFilesAfterEnv: ["./jest.setup.js"],
//   // By default jest will use a node environment, so DOM elements (like document) will be undefined without this
//   testEnvironment: "jsdom",

//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1",
//     "@root/(.*)$": "<rootdir>$1",
//     "@common/(.*)$": "<rootdir>/src/components/common/$1",
//     "@pages/(.*)$": "<rootdir>/src/components/pages/$1",
//     "@icons/(.*)$": "<rootdir>/public/assets/icons/$1*",
//     "tests/(.*)": "<rootDir>/__tests__/$1",
//   },
// };

// module.exports = createJestConfig(customConfig);

// // // eslint-disable-next-line @typescript-eslint/no-var-requires
// // const nextJest = require("next/jest");

// // const createJestConfig = nextJest({
// //   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
// //   dir: "./",
// // });

// // // Add any custom config to be passed to Jest
// // const customJestConfig = {
// //   modulePaths: ["<rootDir>"],
// //   modulePaths: ["<rootDir>"],
// //   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
// //   testEnvironment: "jest-environment-jsdom",
// //   /**
// //    * Absolute imports and Module Path Aliases
// //    */
// //   moduleNameMapper: {
// //     "^@/(.*)$": "<rootDir>/src/$1",
// //     "@root/(.*)$": "<rootdir>/$1",
// //     "@common/(.*)$": "<rootdir>/src/components/common/$1",
// //     "@pages/(.*)$": "<rootdir>/src/components/pages/$1",
// //     "@icons/(.*)$": "<rootdir>/public/assets/icons/$1*",
// //     "tests/(.*)": "<rootDir>/__tests__/$1",
// //   },
// // };

// // // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// // module.exports = createJestConfig(customJestConfig);
