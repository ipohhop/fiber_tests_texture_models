import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import {  NavLink } from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const NavMenu: FunctionComponent<Props> = (props) => {

    return (
        <NavMenuStyled>

            <NavItem>
                <NavLinkStyled to="/pathology">
                    VOKA.PATHOLOGY 3D
                </NavLinkStyled>
            </NavItem>
            <NavItem>
                <NavLinkStyled to="/surgery">
                    VOKA.SURGERY
                </NavLinkStyled>
            </NavItem>
            <NavItem>
                <NavLinkStyled to="/team">
                    TEAM
                </NavLinkStyled>
            </NavItem>
            <NavItem>
                <NavLinkStyled to="/partnership">
                    PARTNERSHIP
                </NavLinkStyled>
            </NavItem>


        </NavMenuStyled>
    );
};

export default NavMenu;


const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: white;
  white-space: nowrap;
  text-decoration: none;
  background: none;
  padding: 0;
  margin: 0;
`

const NavMenuStyled = styled.div`
  height: 24px;
  max-width: 753px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavItem = styled.div`
  height: 15px;
  
  font-family: Telegraf;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;

`
