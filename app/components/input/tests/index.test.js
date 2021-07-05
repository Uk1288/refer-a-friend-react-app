import React from 'react';
import { render } from 'react-testing-library';
import Input from '../index';

describe('<Input />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Input />);
    expect(firstChild).toMatchSnapshot();
  });
});
