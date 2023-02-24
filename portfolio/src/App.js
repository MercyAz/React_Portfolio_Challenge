import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NotFound from "./Pages/NotFound";
import Header from "./Components/Header";

function App() {
  return (
    <>
        <Header/>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/project"} element={<Project />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
