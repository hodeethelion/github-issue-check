import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <h1> Angular / Angular-cli</h1>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
export default SharedLayout;
