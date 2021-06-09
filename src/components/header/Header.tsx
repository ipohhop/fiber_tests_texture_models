// outer
import React, {FunctionComponent} from 'react';
import styled from "styled-components";


//local


interface OwnProps {
}

type Props = OwnProps;


const HeaderWrapper = styled.header`
  height: 80px;
  width: 1920px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
`


const Header: FunctionComponent<Props> = (props) => {

    return (
        <HeaderWrapper>

        </HeaderWrapper>

    );
};

export default Header;
