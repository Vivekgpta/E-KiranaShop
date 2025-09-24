import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div className="bg-[#ffedf3] pt-16">
  <div className="w-full flex flex-col lg:flex-row lg:justify-around gap-8 lg:gap-0 bg-[#ffedf3] p-6">
    {/* Brand Section */}
    <div className="flex justify-center items-center flex-col text-center lg:text-left w-full lg:w-64">
      <h1 className="lg:text-3xl text-2xl text-[#ff5c8f] font-extrabold">
        BlankArt
      </h1>
      <p className="italic lg:text-lg text-sm p-2 text-pink-950 font-poppins">
        Blank Art With. Brilliant Mind.
      </p>
    </div>

    {/* Quick Links */}
    <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
      <h3 className="text-[#ff5c8f] text-xl font-medium mb-2">Quick Links</h3>
      <div className="flex flex-col gap-2 text-pink-950 font-medium">
        <Link className="hover:text-[#ff5c8f]" to={"/"}>Home</Link>
        <Link className="hover:text-[#ff5c8f]" to={"/product"}>Categories</Link>
        <Link className="hover:text-[#ff5c8f]" to={"/product"}>Best Creations</Link>
        <Link className="hover:text-[#ff5c8f]" to={"/product"}>About</Link>
        <Link className="hover:text-[#ff5c8f]" to={"/product"}>Contact</Link>
      </div>
    </div>

    {/* Contact Section */}
    <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
      <h3 className="text-[#ff5c8f] text-xl font-medium mb-2">Contact Us</h3>
      <div className="flex flex-col gap-3 text-pink-950 font-medium">
        <Link className="hover:text-[#ff5c8f]" to={"/"}>
          <div className="flex gap-2 items-center">
            <i className="fa-brands fa-instagram text-[#ff5c8f] text-2xl"></i>
            Instagram
          </div>
        </Link>
        <Link className="hover:text-[#ff5c8f]" to={"/"}>
          <div className="flex gap-2 items-center">
            <i className="fa-brands fa-pinterest text-[#ff5c8f] text-2xl"></i>
            Pinterest
          </div>
        </Link>
        <Link className="hover:text-[#ff5c8f]" to={"/"}>
          <div className="flex gap-2 items-center">
            <i className="fa-solid fa-envelope text-[#ff5c8f] text-2xl"></i>
            BlankArt@icloud.com
          </div>
        </Link>
      </div>
    </div>
  </div>

  {/* Divider */}
  <hr className="w-full h-1 bg-[#f5c1d1] border-0 rounded my-4" />

  {/* Bottom Copyright */}
  <div className="flex items-center justify-center bg-[#ffedf3] px-4">
    <p className="text-center text-sm lg:text-lg text-pink-950 font-poppins">
      © 2025 BlankArt. All Rights Reserved.
    </p>
  </div>
</div>

  );
};

export default Footer;
