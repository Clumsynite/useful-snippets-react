/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import { arrayOf, number, object, oneOfType, shape, string } from "prop-types";
import React, { createRef, useEffect, useRef, useState } from "react";
import { generateCardData } from "../helper/dataGenerator";
import "../styles/HorizontalScroll.css";

const itemShape = shape({
  id: number,
  label: string,
  desc: string,
});

const HorizontalScroll2 = ({ containerStyle, containerClass, width, items }) => {
  const containerRef = useRef(null);

  const itemRefs = React.useRef([]);

  itemRefs.current = items.map((_, i) => itemRefs.current[i] ?? createRef());

  const [isInView, setIsInView] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newIsInView = {};
        entries.forEach((entry) => {
          newIsInView[entry.target.id] = entry.isIntersecting;
        });
        setIsInView((prevIsInView) => ({ ...prevIsInView, ...newIsInView }));
      },
      {
        root: containerRef.current,
        rootMargin: "0px",
        threshold: 0.6, // Adjust threshold as needed
      }
    );
    itemRefs.current.forEach((div) => {
      observer.observe(div.current);
    });

    return () => {
      observer.disconnect();
    };
  }, [itemRefs?.current]);

  const getContainerWidth = () => {
    const containerDiv = containerRef?.current;
    if (!containerDiv) return 0;
    const { width: containerWidth } = containerDiv.getBoundingClientRect();
    return containerWidth * 0.8;
  };

  return (
    <>
      <div className={`h-scroll-container ${containerClass}`} style={{ ...containerStyle, width }} ref={containerRef}>
        {items.length ? (
          items.map((item, i) => (
            <div
              className="h-scroll-item"
              ref={itemRefs.current[i]}
              key={JSON.stringify(item)}
              name={item.label}
              id={`card_${i}`}
              style={{
                width: getContainerWidth(),
                scrollSnapAlign: "start",
                padding: "48px 24px",
              }}
            >
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
            const isVisible = isInView[`card_${i}`];

            const visibilityStyle = isVisible ? { backgroundColor: "#000" } : {};
            return (
              <div
                style={{
                  width: 12,
                  height: 12,
                  margin: `12px 4px`,
                  border: "1px solid #000",
                  borderRadius: "50%",
                  ...visibilityStyle,
                }}
                key={i}
              />
            );
          })}
      </div>
    </>
  );
};
HorizontalScroll2.propTypes = {
  containerStyle: object,
  containerClass: string,
  width: oneOfType([string, number]),
  items: arrayOf(itemShape),
};
HorizontalScroll2.defaultProps = {
  containerStyle: {
    scrollSnapType: "x mandatory",
  },
  containerClass: "",
  width: "auto",
  items: generateCardData(),
};

export default HorizontalScroll2;
