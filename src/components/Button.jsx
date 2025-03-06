import "./Button.css";

const Button = ({ text, type, onClick, className = "" }) => {
  const typeStyles = {
    POSITIVE: "bg-[rgb(122,67,185)] text-white",
    NEGATIVE: "bg-[rgb(253,86,95)] text-white",
  };

  return (
    <button
      onClick={onClick}
      className={` cursor-pointer border-none rounded-lg text-lg whitespace-nowrap max-w-[700px] transition-all duration-200 ease-in-out transform scale-100 font-bold
        active:scale-[0.98] active:duration-75
        hover:scale-[1.01]
        ${typeStyles[type] || "bg-gray-200"}  // type에 맞는 스타일 적용, 없으면 빈 문자열
        ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;