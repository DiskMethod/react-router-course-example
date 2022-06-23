import { Outlet } from "react-router-dom";

import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
