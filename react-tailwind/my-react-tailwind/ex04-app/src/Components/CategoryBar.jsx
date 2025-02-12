export default function CategoryBar() {
  return (
    <div className="menubar flex-col pt-4 ">
      <h1 className="text-[24px] font-[500]">전체영화</h1>
      <div className="flex flex-row w-full justify-between self-center pt-5">
        <div className="selectcategoryBox">박스오피스</div>
        <div className="categoryBox">상영예정작</div>
        <div className="categoryBox">단독</div>
        <div className="categoryBox">필름소사이어티</div>
        <div className="categoryBox">클래식소사이어티</div>
      </div>
    </div>
  );
}
