import React from "react";

import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide">
      <div className="w-full grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((img, i) => (
          <Link
            key={i}
            className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer"
          >
            <img
              className="w-full h-full object-fill"
              src={`http://localhost:5173/project.png`}
              alt=""
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
