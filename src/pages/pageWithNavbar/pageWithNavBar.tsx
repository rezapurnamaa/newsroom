import { NavBar } from "../../components/NavBar";
import { Outlet } from "react-router";

export const PageWithNavBar = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
