/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('appcenter-crashes', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    inFocusDisplaying: jest.fn(),
  };
});

it('renders correctly', () => {
  const component = renderer.create(<App />);
  const johnDoe = 'JohnDoe';
  expect(component).toMatchSnapshot();
  expect(johnDoe).toEqual(2);
});
