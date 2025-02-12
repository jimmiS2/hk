export default function Nav() {
  return (
    <div className="flex flex-row h-[35px] bg-gray-100">
      <div className="menubar gap-2 items-center justify-center">
        <img
          src="src\assets\bg-location-home.png "
          alt="이벤트"
          className="w-[15px] object-contain"
        />
        <img
          src="src\assets\bg-location-arr.png "
          alt="이벤트"
          className="arr"
        />
        <p className="text-[13px] text-gray-500">영화</p>
        <img
          src="src\assets\bg-location-arr.png "
          alt="이벤트"
          className="arr"
        />
        <p className="text-[13px] text-gray-500">전체영화</p>
      </div>
    </div>
  );
}
