import React from 'react';
import { render } from 'react-testing-library';
import StyledSuccessText from '../index';

describe('<StyledSuccessText />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<StyledSuccessText />);
    expect(firstChild).toMatchSnapshot();
  });
});
