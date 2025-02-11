import { useState } from "react";

function Menu() {
  // 드롭다운 상태 관리
  const [openDropdown, setOpenDropdown] = useState(null);

  // 마우스가 올라갔을 때 드롭다운 보이기
  const handleMouseEnter = (idx) => {
    setOpenDropdown(idx);
  };

  // 마우스가 벗어났을 때 드롭다운 숨기기
  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // 메뉴 리스트
  const menuItems = [
    {
      title: "제품",
      dropdown: ["전자기기", "의류", "도서", "액세서리"],
    },
    { title: "서비스", dropdown: ["컨설팅", "교육", "고객지원", "유지보수"] },
    {
      title: "회사 소개",
      dropdown: ["회사정보", "팀 소개", "채용정보", "연락처"],
    },
  ];

  return (
    <div className="flex mr-10 items-center">
      <ul className="flex gap-[40px] text-[13px]">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            {item.title}
            {item.dropdown.length > 0 && (
              <div
                className={`w-[120px] h-auto absolute shadow-sm bg-white rounded-sm flex flex-col transition-all duration-200 ${
                  openDropdown === idx ? "block" : "hidden"
                }`}
              >
                {item.dropdown.map((subItem, subIdx) => (
                  <div
                    key={subIdx}
                    className="p-1.5 pl-2 text-[12px] hover:bg-blue-100"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
