import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: () => Root(),
});

function Root() {
  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
}
