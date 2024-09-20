import React from "react";

const Image = ({ add_image }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      {[1, 2, 3, 4].map((img, i) => (
        <div
          key={i}
          onClick={() => add_image("http://localhost:5173/project.png")}
          className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer"
        >
          <img
            className="w-full h-full object-fill"
            src={`http://localhost:5173/project.png`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Image;
