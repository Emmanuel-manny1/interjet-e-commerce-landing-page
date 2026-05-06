export const RevenueCards = ({
  percentage,
  title,
  img,
  description,
  smallImage = false,
}) => {
  return (
    <div className="revenue-card padXY">
      <p className="percentage">{percentage}</p>
      <p className="rev-title">{title}</p>
      <img
        className="logo"
        src={img}
        alt=""
        style={{
          width: smallImage ? "8rem" : "10rem",
          height: "30px",
          objectFit: "contain",
        }}
      />
      <p className="rev-description">{description}</p>
    </div>
  );
};
