import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Aside from "./components/Aside";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-[800px] bg-cyan-400">
      <Header />
      <Nav />
      <div className="flex flex-row">
        <Aside />
        <Section />
      </div>
      <Footer />
    </div>
  );
}

export default App;
