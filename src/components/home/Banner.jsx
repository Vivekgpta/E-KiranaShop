import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-24 w-full px-4 flex flex-col items-center gap-6">
      {/* Main Banner */}
      <div className="w-full rounded-2xl overflow-hidden shadow-md">
        <Link to="/">
          <img
            className="w-full h-64 sm:h-80 md:h-[400px] object-cover"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
            alt="Main promotional banner"
          />
        </Link>
      </div>

      {/* Sub Banners */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/product" className="block w-full h-40 rounded-xl overflow-hidden shadow">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
            alt="Pharmacy banner"
          />
        </Link>

        <Link to="/product" className="block w-full h-40 rounded-xl overflow-hidden shadow">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
            alt="Pet care banner"
          />
        </Link>

        <Link to="/product" className="block w-full h-40 rounded-xl overflow-hidden shadow">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"
            alt="Baby care banner"
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
