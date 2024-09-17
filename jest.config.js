export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/__mocks__/styleMock.js', // Map all CSS files to styleMock
    'react-multi-carousel/lib/styles.css': '<rootDir>/src/__mocks__/styleMock.js', // Mapea the react-multi-carouselCSS 
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};