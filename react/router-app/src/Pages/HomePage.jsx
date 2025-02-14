import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigater = useNavigate();
  const gotoAbout = () => {
    navigater("/about");
  };

  return (
    <div>
      <h1>홈 페이지</h1>
      <button onClick={gotoAbout}> 소개페이지로 이동 </button>
    </div>
  );
}

export default HomePage;
