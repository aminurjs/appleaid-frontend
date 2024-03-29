import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <div className="bg-white rounded border border-gray-200 ">
      <Link to={`/post/${card._id}`}>
        <img
          className="rounded-t aspect-[10/6]"
          src={card.image || "/assets/no-img.jpg"}
          alt=""
          width={500}
          height={500}
        />
      </Link>
      <div className="p-5">
        <div className="pb-3 mb-4 border-b border-gray-200">
          <Link
            to={`/post/${card._id}`}
            className="text-2xl font-semibold text-dark-01 hover:underline"
          >
            {" "}
            {card?.title.length > 40
              ? `${card.title.slice(0, 40)} ...`
              : card.title}
          </Link>
        </div>
        <div />
        <p className="text-dark-02 mb-4">
          {card?.content.length > 120
            ? `${card.content.slice(0, 120)} ...`
            : card.content}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
