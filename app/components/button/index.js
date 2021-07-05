import styled from 'styled-components';
import { APP_GREEN, APP_WHITE } from '../../constants/color-constants';

const StyledButton = styled.button`
  height: 28px;
  background: ${APP_GREEN};
  border-radius: 20px;
  border: none;
  color: ${APP_WHITE};
  position: absolute;
  right: 4px;
  top: 4px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & span {
    font-family: Roboto;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
  }
`;

export default StyledButton;
