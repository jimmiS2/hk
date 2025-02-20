import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="w-[360px] h-[160px] flex flex-col gap-4 justify-center items-center bg-white shadow-sm rounded-lg">
      <div className="flex flex-row gap-[60px]">
        <h2 className="text-[20px] font-bold">{props.name}</h2>
        <p className="text-[16px] font-bold text-blue-600">{props.price}</p>
      </div>
      <div className="pl-8 self-start pb-3">
        <p className="text-[14px] text-gray-600">{props.description}</p>
      </div>
      <div className="flex flex-row gap-[110px] items-center">
        <button
          type="button"
          className="bg-blue-200 w-[60px] h-[20px] text-blue-600 text-[10px] rounded-sm"
        >
          {props.category}
        </button>
        <button
          type="button"
          className="bg-blue-600 w-[100px] h-[30px] text-white text-[12px] rounded-sm"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string,
  category: PropTypes.string,
};

export default Card;
