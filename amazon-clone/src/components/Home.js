import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Without_remorse/launch/1500x600_Hero-Tall_JPN._CB670768292_.jpg"
          alt="Amazon Prime"
          className="home__containerImage"
        />
        <div className="home__row">
          <Product
            id="3215"
            title="Código Limpio / Clean Code : Robert C. Martin"
            price={9361}
            rating={5}
            image="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp"
          />
          <Product
            id="6987"
            title="Javascript: Javascript Programming For Absolute Be..."
            price={1349}
            rating={5}
            image="https://http2.mlstatic.com/D_NQ_NP_794903-MLA26289240932_112017-O.webp"
          />
        </div>

        <div className="home__row">
          <Product
            id="6457"
            title="Learning React Native: Building Native Mobile Apps..."
            price={11151}
            rating={5}
            image="https://http2.mlstatic.com/D_NQ_NP_835599-MLA26239270219_102017-O.webp"
          />
          <Product
            id="6547"
            title="React For Real Front-end Code, Untangled - Fischer,.."
            price={4720}
            rating={5}
            image="https://http2.mlstatic.com/D_NQ_NP_960888-MLA30864694005_052019-O.webp"
          />
          <Product
            id="3259"
            title="React Design Patterns And Best Practices Build Easy.."
            price={4800}
            rating={5}
            image="https://http2.mlstatic.com/D_NQ_NP_949721-MLA29020525244_122018-O.webp"
          />
        </div>

        <div className="home__row">
          <Product
            id="9865"
            title="Python Crash Course The Introduction To Programming.."
            price={4951}
            rating={5}
            image="https://http2.mlstatic.com/D_NQ_NP_678176-MLA31546487400_072019-O.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
