import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className=" mt-24 h-full p-4 relative
     flex justify-center items-center gap-4 flex-col"
    >
      <div className="relative rounded-2xl overflow-hidden">
        {/* Banner image */}
        <Link to={"/"}>
          <img
            className=" object-cover"
            src="
https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
            alt="Happy customer with shopping bags"
          />
        </Link>
      </div>
      <div className="w-full h-40  flex justify-between items-center gap-4 px-4">
        <div className="w-1/3 h-40  ">
          <Link to={"/product"}>
            {" "}
            <img
              className=" object-cover"
              src="
      https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg
"
              alt="Happy customer with shopping bags"
            />
          </Link>
        </div>
        <div className="w-1/3 h-40">
          {" "}
          <Link to={"/product"}>
            {" "}
            <img
              className=" object-cover"
              src="
      https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg
"
              alt="Happy customer with shopping bags"
            />
          </Link>
        </div>
        <div className="w-1/3 h-40">
          {" "}
          <Link to={"/product"}>
            {" "}
            <img
              className=" object-cover"
              src="
      https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg
"
              alt="Happy customer with shopping bags"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
