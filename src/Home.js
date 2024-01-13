import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61tX6L542kL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="SAMSUNG Odyssey G70B Series 32-Inch 4K UHD Gaming Monitor, IPS Panel, 144Hz"
            price="649.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/41etBiSd9jS._AC_UF452,452_FMjpg_.jpg"
          />
          <Product
            id={2}
            title="TP-Link Deco BE33000 Quad-Band WiFi 7 Mesh System (Deco BE95) for Whole Home Coverage up to 7800 Sq.Ft with AI-Driven Smart Antennas"
            price="999.99"
            rating={4}
            image="https://m.media-amazon.com/images/I/313Uy44WCzL._AC_UF452,452_FMjpg_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            title="AMD Ryzen 9 5950X 16-core, 32-thread unlocked desktop processor"
            price="399.00"
            rating={4}
            image="https://m.media-amazon.com/images/I/21bcVc77fEL._AC_UF226,226_FMjpg_.jpg"
          />
          <Product
            id={4}
            title="ZOTAC Gaming GeForce RTX™ 3060 Ti Twin Edge OC LHR 8GB GDDR6 256-bit 14 Gbps PCIE 4.0 Graphics Card"
            price="349.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/41QcAwEXIgL._AC_UF226,226_FMjpg_.jpg"
          />
          <Product
            id={6}
            title="Realspace® Fennington Bonded Leather High-Back Chair, Brown/Black"
            price="169.99"
            rating={3}
            image="https://m.media-amazon.com/images/I/71c8TWr8EYL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={5}
            title="Corsair Dark Core RGB Pro SE, FPS/MOBA Gaming Mouse with SLIPSTREAM Technology, Black, Backlit RGB LED"
            price="79.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/41S0Q1AjqWL._AC_UF226,226_FMjpg_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
