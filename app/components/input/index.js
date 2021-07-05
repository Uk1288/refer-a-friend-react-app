import styled from 'styled-components';
import { APP_GREEN, APP_GREY_01 } from '../../constants/color-constants';

const StyledInput = styled.input`
  height: 36px;
  width: 343px;
  background-color: ${APP_GREY_01};
  border-radius: 24px;
  border: none;
  padding: 0px 68px 0px 10px;
  & :focus-visible {
    outline: none;
    border: solid ${APP_GREEN} 2px;
  }
  @media only screen and (min-width: 600px) {
    width: 496px;
  }
`;

export default StyledInput;
