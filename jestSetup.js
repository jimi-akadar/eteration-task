jest.mock('@react-navigation/native/lib/commonjs/useBackButton', () => ({
  default: () => ({getInitialState: {then: jest.fn()}}),
  __esModule: true
}));

jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
  default: () => ({getInitialState: {then: jest.fn()}}),
  __esModule: true
}));

jest.mock('axios');

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
