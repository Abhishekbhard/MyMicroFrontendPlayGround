// jest.config.js
module.exports = {
  preset: "ts-jest", // Use ts-jest for TypeScript files
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Ensure this points to the .ts file
  testMatch: ["<rootDir>/packages/**/*.test.ts?(x)"], // Matches test files within packages
  moduleNameMapper: {
    // Handle CSS module imports (common in Vite projects)
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    // This regex ensures that only specific problematic ES modules are transformed
    // If you encounter issues with a specific package, add it here.
    // Example: '/node_modules/(?!(some-es-module-package)/)',
  ],
  // Optional: For finer-grained control over each package's Jest configuration
  // projects: [
  //   '<rootDir>/packages/*/jest.config.ts', // This helps Jest find package-specific configs
  // ],
};
