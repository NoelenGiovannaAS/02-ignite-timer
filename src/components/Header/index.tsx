import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logoIgnite from "../../assets/Logo.svg";
import * as Styles from "./styles";

export const Header = () => {
  return (
    <Styles.HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </Styles.HeaderContainer>
  );
};
