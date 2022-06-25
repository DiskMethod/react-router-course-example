import { Outlet } from "react-router-dom";

const Welcome = (props) => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Outlet />
    </section>
  );
};

export default Welcome;
