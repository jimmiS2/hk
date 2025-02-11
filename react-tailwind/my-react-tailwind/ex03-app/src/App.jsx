import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Card from "./components/Card";

function App() {
  return (
    <div className="">
      <div className="w-full h-screen bg-gray-200">
        <div className="w-full h-[50px] shadow-xl flex justify-between bg-white">
          <Header />
          <Menu />
        </div>
        <div className="grid h-auto justify-items-center p-4 m-4 gap-4 bg-gray-200 lg:grid-cols-3 place-items-ceter md:grid-cols-2 sm:grid-cols-1">
          <Card
            name={"프리미엄 노트북"}
            price={"1,599,000원"}
            description={"최신 사양의 고성능 노트북"}
            category={"전자기기"}
          />
          <Card
            name={"프리미엄 노트북"}
            price={"1,599,000원"}
            description={"최신 사양의 고성능 노트북"}
            category={"전자기기"}
          />
          <Card
            name={"프리미엄 노트북"}
            price={"1,599,000원"}
            description={"최신 사양의 고성능 노트북"}
            category={"전자기기"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
