export default function SectionBar() {
  return (
    <div className="menubar">
      <div className="flex flex-row gap-2 justify-center items-center">
        <button className="w-[30px] h-[15px] bg-gray-200 rounded-xl"></button>
        <p className="text-[12px]">개봉작만</p>
        <p className="text-[12px]">10개의 영화가 검색되었습니다.</p>
      </div>
    </div>
  );
}
