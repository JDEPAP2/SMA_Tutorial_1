const { createDefaultPreset } = require('ts-jest')
/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    roots: [
    "<rootDir>/test"
    ],
    
    testMatch: [
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
        ...createDefaultPreset().transform,
      },
    collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    ],
    globals: {
    "ts-jest": {
    tsconfig: "tsconfig.json",
    },
    },
    }