import React, { FunctionComponent } from 'react';
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;



const LogoText = styled.span`
  height: 96px;
  width: 426px;
  left: 286px;
  top: 455px;
  border-radius: 0;
  
  font-family: Montserrat;
  font-size: 76px;
  font-style: normal;
  font-weight: 600;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: left;

  font-family: Montserrat;
  font-size: 96px;
  font-style: normal;
  font-weight: 600;
  line-height: 96px;
  letter-spacing: 0em;
  text-align: left;

  font-family: Montserrat;
  font-size: 96px;
  font-style: normal;
  font-weight: 800;
  line-height: 96px;
  letter-spacing: 0em;
  text-align: left;
  
  // On click
  // Open overlay: "Frame 7";
  // Animate: Dissolve;
  animation-timing-function: cubic-bezier(Ease Out);
  animation-duration: 300ms;


  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 96px;
  line-height: 100%;
  /* identical to box height, or 96px */


  /* White */

  color: #FFFFFF;

`


const Logo: FunctionComponent<Props> = (props) => {

  return (
      <LogoText>
          VOKA.IO
      </LogoText>
  );
};

export default Logo;
