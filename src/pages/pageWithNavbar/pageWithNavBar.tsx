import { NavBar } from "../../components/NavBar";
import { Outlet } from "react-router";

export const PageWithNavBar = (props: { username: string }) => {
  return (
    <>
      <NavBar username={props.username} />
      <Outlet />
    </>
  );
};
