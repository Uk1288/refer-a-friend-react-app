import React from 'react';
import styled from 'styled-components';
import MainLogo from '../../images/main-logo.png';

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;
/* (phones, 600px and down)
  @media only screen and (max-width: 600px) {...}
*/

/* (tablets and large phones, 600px and up)
  @media only screen and (min-width: 600px) {...}
*/

/* (laptops/desktops, 1280px and up)
  @media only screen and (min-width: 1280px) {...}
*/

const StyledImageParent = styled.div`
  width: 247px;
  height: 247px;
  margin-top: 47px;
  @media only screen and (min-width: 600px) {
    margin-top: 60px;
  }
  @media only screen and (min-width: 1280px) {
    position: absolute;
    width: 362px;
    height: 362.89px;
    left: 70px;
    top: 350px;
  }
`;

export default function LogoLoader() {
  return (
    <div>
      <StyledImageParent>
        <StyledImage src={MainLogo} alt="Refer a friend logo" />
      </StyledImageParent>
    </div>
  );
}
