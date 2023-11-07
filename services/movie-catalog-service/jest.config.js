module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: "(/test/unit/.*\\.test\\.ts)$",
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};
