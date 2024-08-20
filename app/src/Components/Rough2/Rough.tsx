import React, { useState } from "react";

const Rough = () => {
  const [display, setDisplay] = useState(false);
  console.log(display);
  const download = () => {
    setDisplay(true);
  };
  return (
    <div>
      <button onClick={download}>Click Here</button>
      {display ? (
        <>
          <div style={{ color: "gold" }}>Welcome</div>
        </>
      ) : (
        <div>leave my office</div>
      )}
    </div>
  );
};

export default Rough;
