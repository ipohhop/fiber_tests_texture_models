// outer
import React, {FunctionComponent} from 'react';
import styled from "styled-components";


//local
import NavMenu from "./NavMenu";
import Logo from "../generalComponents/Logo";


interface OwnProps {
}

type Props = OwnProps;


const Header: FunctionComponent<Props> = (props) => {

    return (
        <HeaderWrapper>
            <MenuWrapper>
                <Logo/>

                <NavWrapper>
                    <NavMenu/>
                </NavWrapper>

                <LanguageWrapper>
                    Ру
                </LanguageWrapper>

            </MenuWrapper>
        </HeaderWrapper>

    );
};

export default Header;


const HeaderWrapper = styled.header`
  background: black;
  height: 80px;
  max-width: 1920px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuWrapper = styled.div`
  background: black;
  height: 24px;
  max-width: 1630px;
  width: 85%;
  left: 0px;
  top: 0px;
  border-radius: 0px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const NavWrapper = styled.div`
  background: black;
  height: 24px;
  max-width: 1506px;
  width: 92%;
  left: 0px;
  top: 0px;
  border-radius: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const LanguageWrapper = styled.div`

  cursor: pointer;
  
  font-family: Telegraf;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */

  text-align: right;
  text-transform: capitalize;

  /* Blue snow */

  color: #0D95E5;
`

