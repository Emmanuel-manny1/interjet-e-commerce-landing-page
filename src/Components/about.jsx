import { AboutCards } from "./about-cards";
export const About = () => {
  return (
    <section className="about-section padXY">
      <div className="text">
        <h1>ABOUT US</h1>
        <p>Why top <span className="commerce">e-commerce companies</span> <br /> choose us</p>
      </div>

      <div className="about-cards-container padXY">
        <AboutCards
          title={"E-commerce Based"}
          description={
            "Helping you sell stuff is what gets us up in the morning-we don't do any other type of marketing."
          }
          img={"/images/carbon-shopping-cart.png"}
        />

        <AboutCards
          title={"Focus is on growth"}
          description={
            "Helping you sell stuff is what gets us up in the morning-we don't do any other type of marketing."
          }
          img={"/images/carbon-shopping-cart.png"}
        />

        <AboutCards
          title={"We're Experts"}
          description={
            "Helping you sell stuff is what gets us up in the morning-we don't do any other type of marketing."
          }
          img={"/images/carbon-shopping-cart.png"}
        />
      </div>
    </section>
  );
};
