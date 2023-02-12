import React from "react";

const Home = () => {
  return (
    <div>
      <div>Home</div>

      {Array.from({ length: 5000 }, (_, i) => (
        <div key={i}>Home: {i}</div>
      ))}
    </div>
  );
};

export default Home;
