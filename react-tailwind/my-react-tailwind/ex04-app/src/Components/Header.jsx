export default function Header() {
  return (
    <div>
      <div className="menubar">
        <ul className="topmenu">
          <li>VIP LOUNGE</li>
          <li>멤버십</li>
          <li>고객센터</li>
        </ul>
        <ul className="topmenu">
          <li>VIP LOUNGE</li>
          <li>멤버십</li>
          <li>고객센터</li>
        </ul>
      </div>
      <div className="menubar m-4">
        <div className="flex flex-row h-[20px] gap-3">
          <img src="src\assets\ico-sitemap.png" alt="사이트맵" />
          <img src="src\assets\ico-search.png" alt="검색" />
        </div>
        <div className="flex flex-row justify-between gap-20 h-[22px] ">
          <img src="src\assets\gnb-txt-movie.png" alt="영화" />
          <img src="src\assets\gnb-txt-reserve.png" alt="예매" />
          <img src="src\assets\gnb-txt-theater.png" alt="극장" />
          <div className="">
            <img src="src\assets\logo_new2.png" alt="로고" />
          </div>
          <img src="src\assets\gnb-txt-event.png" alt="이벤트" />
          <img src="src\assets\gnb-txt-store.png" alt="스토어" />
          <img src="src\assets\gnb-txt-benefit.png" alt="혜택" />
        </div>
        <div className="flex flex-row h-[25px] gap-3">
          <img
            src="src\assets\ico-schedule.png"
            alt="일정"
            className="w-[40px] h-[30px] object-center"
          />
          <img src="src\assets\ico-mymega.png" alt="마이페이지" />
        </div>
      </div>
      <div className="border-b border-purple-800 h-6 "></div>
    </div>
  );
}
