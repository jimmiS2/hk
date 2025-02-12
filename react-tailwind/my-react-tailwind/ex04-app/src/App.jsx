import "./App.css";
import CategoryBar from "./Components/categoryBar";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import SectionBar from "./Components/SectionBar.jsx";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <CategoryBar />
      <SectionBar />
    </div>
  );
}

export default App;
