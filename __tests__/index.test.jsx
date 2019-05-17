import * as React from 'react';
import { mount } from 'enzyme';

import App from '../src/App';

describe('Components', () => {
  describe('Index', () => {
    it('renders without crashing', () => {
      const wrapper = mount(<App />);
      expect(wrapper.exists()).toBe(true);
    });
  });
});
