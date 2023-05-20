import React from "react";
import HorizontalScroll from "../components/HorizontalScroll";
import HorizontalScroll2 from "../components/HorizontalScroll2";

const CardScroll = () => (
  <div>
    <div className="title">Card Scroll</div>
    <hr />
    <div style={{ margin: "20px 0" }}>
      <div style={{ padding: "12px 0" }}>
        <div className="title">Horizontal Scroll</div>
        <div>Continuous Scroll Indicator for Cards that don&apos;t take up full width</div>
      </div>
      <HorizontalScroll />
    </div>

    <div style={{ margin: "20px 0" }}>
      <div style={{ padding: "24px 0", borderTop: "1px solid #00000070" }}>
        <div className="title">Horizontal Scroll 2</div>
        <div>Scroll Indicator to indicate which card is currently in view</div>
      </div>
      <HorizontalScroll2 />
    </div>
  </div>
);

export default CardScroll;
