import React from "react";
import HorizontalScroll from "../components/HorizontalScroll";

const CardScroll = () => (
  <div>
    <div className="title">Card Scroll</div>
    <hr />
    <div style={{ marginTop: 20 }}>
      <div className="title">Horizontal Scroll</div>

      <HorizontalScroll />
    </div>
  </div>
);

export default CardScroll;
