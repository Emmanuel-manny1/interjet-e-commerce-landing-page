export const AboutCards = ({ img, title, description }) => {
  return (
    <div className="abt-card padXY">
      <img className="cart" src={img} alt="" />
      <h1 className="abt-title">{title}</h1>
      <p className="abt-description">{description}</p>
    </div>
  );
};
