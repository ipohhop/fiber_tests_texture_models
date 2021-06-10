// outer
import React, {FunctionComponent} from 'react';
import styled from "styled-components";

// local

interface OwnProps {
    width?: string,
    height?: string,
    frontSize?: string
}

type Props = OwnProps;


const Logo: FunctionComponent<Props> = (props) => {

    return (
        <>
            <LogoText {...props} >
                VOKA.<span style={{color: "#0D95E5"}}> IO  </span>
            </LogoText>
        </>

    );
};

export default Logo;


const LogoText = styled.span<OwnProps>`

  height: ${props => props.height || "24px"};
  width: ${props => props.width || "107px"};
  font-size: ${props => props.frontSize || "24px"};

  border-radius: 0;

  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;

  color: #FFFFFF;
  
  display: flex;
`
