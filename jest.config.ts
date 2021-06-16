import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
	},
	watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
	moduleDirectories: ['node_modules', '.'],
	transformIgnorePatterns: ['/node_modules/'],
	testTimeout: 30000,
	maxWorkers: 3,
	verbose: true,
	testEnvironment: 'jsdom'
};

export default config;
