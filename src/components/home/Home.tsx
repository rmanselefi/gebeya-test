import React from "react";
import Carousel from "../layout/Carousel";
import Header from "../layout/Header";
import Inner from "../layout/Inner";
import MainTop from "../layout/MainTop";
import Products from "../products/Products";

function Home() {
  return (
    <React.Fragment>
      <MainTop />
      <Header />
      <Inner/>
      <Carousel/>
      <Products/>
    </React.Fragment>
  );
}

export default Home;
