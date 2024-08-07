import React from "react";
import arr from "../"

const Home = () => {
  const arr = [
    { name: "telefon", id: 0 },
    { name: "televizyon", id: 1 },
    { name: "araba", id: 2 },
  ];

  const redirectFunc = (id) => {
    window.location =`/detail/${id}`;
  };

  return (
    <>
      <div>
        {arr.map((ar, i) => (
          <div
            onClick={() => redirectFunc(ar.id)}
            style={{
              margin: "10px",
              cursor: "pointer",
              border: "1px solid black",
              padding: "5px",
            }}
          >
            {ar.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
