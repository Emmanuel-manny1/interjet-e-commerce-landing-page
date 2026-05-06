import { RevenueCards } from "./revenue-cards";
export const Revenue = () => {
  return (
    <section className="revenue-section padXY">
      <div className="revenue-cards-container">
        <RevenueCards
          percentage={"+310%"}
          title={"increase in revenue"}
          img={"/images/Frame-1.png"}
          description={"View case Study"}
        />
        <RevenueCards
          percentage={"+210%"}
          title={"increase in revenue"}
          img={"/images/Layer-1.png"}
          description={"View case Study"}
        />
        <RevenueCards
          smallImage={true}
          percentage={"+136%"}
          title={"increase in revenue"}
          img={"/images/Frame-4.png"}
          description={"View case Study"}
        />
      </div>
    </section>
  );
};
