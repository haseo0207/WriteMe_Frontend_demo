import { useState, useEffect, useRef } from "react";

const CustomSelect = ({ domainList, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("직접 입력");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
    onSelect(value === "직접 입력" ? "" : value);

  };

  return (
    <div className="relative text-sm" ref={dropdownRef}>
      <div
        className={`border-2 rounded-xl p-2.5 px-5 cursor-pointer whitespace-nowrap min-w-[130px] ${isOpen ? "border-black" : "border-gray-100"
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between space-x-3">
          <p>{selected}</p>
          <p>{isOpen ? " ▲" : " ▼"}</p>
        </div>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full border-2 border-gray-100 rounded-xl mt-1 bg-white max-h-[160px] overflow-y-auto overflow-x-hidden">
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              handleSelect("직접 입력")
            }}
          >
            직접 입력
          </li>
          {domainList.map((domain) => (
            <li
              key={domain}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleSelect(domain)
              }}
            >
              {domain}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;