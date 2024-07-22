import React from "react";

export default function Globe() {
  return (
    <div className="digital-ball">
      <div className="overlay"></div>
      <div
        className="globe"
        style={{
          transform: "translate(-50%, -50%) translate(-0.14062px, -0.14062px)",
        }}
      >
        <div className="globe-wrap">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle-hor"></div>
          <div className="circle-hor-middle"></div>
        </div>
      </div>
    </div>
  );
}
