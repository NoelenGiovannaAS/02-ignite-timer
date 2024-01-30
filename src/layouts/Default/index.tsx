import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import * as Styles from "./styles.ts";

export const Default = () => {
  return (
    <Styles.Container>
      <Header />
      <Outlet />
    </Styles.Container>
  );
};
