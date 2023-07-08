module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jest-environment-jsdom',
    
};
  