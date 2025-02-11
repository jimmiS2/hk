import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full">
        <Header />
        <Nav />
        <div className="w-full flex flex-row">
          <Section />
          <Aside />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
