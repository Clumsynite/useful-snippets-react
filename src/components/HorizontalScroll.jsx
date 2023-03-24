/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import { arrayOf, number, object, oneOfType, shape, string } from "prop-types";
import React, { createRef, useRef, useState } from "react";
import { generateCardData } from "../helper/dataGenerator";
import "../styles/HorizontalScroll.css";

const itemShape = shape({
  id: number,
  label: string,
  desc: string,
});

const HorizontalScroll = ({ containerStyle, containerClass, width, items }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const itemRefs = React.useRef([]);

  itemRefs.current = items.map((_, i) => itemRefs.current[i] ?? createRef());

  const handleScroll = (event) => {
    console.log("scrolling............", event.target.scrollLeft, scrollLeft);
    setScrollLeft(event.target.scrollLeft);
  };

  // if (false) handleScroll();

  /**
   * Check if an element is in viewport
   *
   * @param {number} [offset]
   * @returns {boolean}
   */
  function isInViewport(cardRef) {
    if (!cardRef?.current) return false;
    const { left, right } = cardRef.current.getBoundingClientRect();
    const { left: containerLeft, right: containerRight } = containerRef.current.getBoundingClientRect();
    // const isVisibleLocally = left >= containerLeft && right <= containerRight;
    // return isVisibleLocally;
    let visible = 0;
    let dir = ""; // left | mid | right

    if (left >= containerLeft && left >= 0 && right <= containerRight) {
      visible = 2;
      dir = "mid";
    } else if ((right > containerLeft && left < containerLeft) || (right > containerRight && left < containerRight)) {
      visible = 1;
      if (right > containerLeft && left < containerLeft) dir = "left";
      else dir = "right";
    } else if (left > containerLeft && right > containerRight) {
      visible = 0;
      dir = "";
    }

    const name = cardRef?.current?.getAttribute("name");
    console.log({ name, visible, dir });
    // console.log({ isVisibleLocally, left, containerLeft, right, containerRight, name });
    // console.log({name, })

    return { visible, dir };
  }

  return (
    <>
      <div
        className={`h-scroll-container ${containerClass}`}
        style={{ ...containerStyle, width }}
        onScroll={handleScroll}
        ref={containerRef}
      >
        {items.length ? (
          items.map((item, i) => (
            <div className="h-scroll-item" ref={itemRefs.current[i]} key={JSON.stringify(item)} name={item.label}>
              <div>{`ID:  ${item.id}`}</div>
              <div>{`Label:  ${item.label}`}</div>
              <div>{`Description:  ${item.description}`}</div>
            </div>
          ))
        ) : (
          <div className="h-scroll-item">List is Empty</div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          transition: "0.2s ease-in-out",
        }}
      >
        {itemRefs?.current?.length &&
          itemRefs.current.map((ref, i) => {
            const { visible, dir } = isInViewport(ref);

            const visibilityStyle = {
              2: { backgroundColor: "#000", borderRadius: 0, margin: "12px 0px", padding: "0px 4px" },
              1: { backgroundColor: "grey", borderRadius: 0, margin: "12px 0px", padding: "0px 4px" },
              0: { backgroundColor: "#fff", borderRadius: "50%", padding: 0 },
            };

            const dirStyle = {
              mid: {
                borderRadius: 0,
              },
              left: {
                borderTopLeftRadius: "50%",
                borderBottomLeftRadius: "50%",
                borderColor: "grey",
                padding: 0,
              },
              right: {
                borderTopRightRadius: "50%",
                borderBottomRightRadius: "50%",
                borderColor: "grey",
                padding: 0,
              },
            };
            return (
              <div
                style={{
                  width: 12,
                  height: 12,
                  margin: `12px 4px`,
                  border: "1px solid #000",
                  borderRadius: "50%",
                  ...([0, 1, 2].includes(visible) && visibilityStyle[visible]),
                  ...(dir && dirStyle[dir]),
                }}
                key={i}
              />
            );
          })}
      </div>
    </>
  );
};
HorizontalScroll.propTypes = {
  containerStyle: object,
  containerClass: string,
  width: oneOfType([string, number]),
  items: arrayOf(itemShape),
};
HorizontalScroll.defaultProps = {
  containerStyle: {},
  containerClass: "",
  width: "auto",
  items: generateCardData(),
};

// const CardItem = ({ item, containerRef, onScroll }) => {
//   const cardRef = useRef(null);

//   /**
//    * Check if an element is in viewport
//    *
//    * @param {number} [offset]
//    * @returns {boolean}
//    */
//   function isInViewport(offset = 0) {
//     if (!cardRef?.current) return false;
//     const { left } = cardRef.current.getBoundingClientRect();
//     const isVisibleLocally = left + offset >= 0 && left - offset <= containerRef.current.getBoundingClientRect().width;
//     return isVisibleLocally;
//   }

//   return (
//     <div className="h-scroll-item" ref={cardRef}>
//       <div>{`ID:  ${item.id}`}</div>
//       <div>{`Label:  ${item.label}`}</div>
//       <div>{`Description:  ${item.description}`}</div>
//     </div>
//   );
// };
// CardItem.propTypes = {
//   item: itemShape.isRequired,
//   containerRef: oneOfType([
//     // Either a function
//     func,
//     // Or the instance of a DOM native element (see the note about SSR)
//     shape({ current: instanceOf(Element) }),
//   ]).isRequired,
//   scrollLeft: number.isRequired,
// };
export default HorizontalScroll;
