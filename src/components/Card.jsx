import "./Card.css"; // Create this CSS file for custom styles

const Card = ({ image, title }) => {
  return (
    <div className="card-project">
      <div className="card-overlay">
        <img src={image} alt={title} className="img-fluid card-img" />
        <div className="overlay">
          <div className="text">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
