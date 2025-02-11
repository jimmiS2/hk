function Aside() {
  return (
    <>
      <div className="w-[20%] h-[400px] flex justify-start items-start border border-black m-5">
        <div className="flex flex-col">
          <h4 className="pl-3">Golden Retriever</h4>
          <img
            src=".\src\assets\image.png"
            alt="리트리버"
            className="m-3 h-[200px] "
          />
          <ul className="pl-3">
            <li>● 기본특성</li>
            <li>● 단점</li>
            <li>● 키울 시 주의점</li>
            <li>● 파생 혼종견</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Aside;
