import React from 'react';
import { render } from 'react-testing-library';
import StyledErrorText from '../index';

describe('<StyledErrorText />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<StyledErrorText />);
    expect(firstChild).toMatchSnapshot();
  });
});
