import "./App.css";
import FilterTurlar from "./ContextApi/FilterTurlar";
import Navbar from "./Page/NavbarElement/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Page/Footer/Footer";

function App() {
  return (
    <FilterTurlar>
      <Navbar />
      <Outlet />
      <Footer />
    </FilterTurlar>
  );
}

export default App;
