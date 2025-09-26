// import React from 'react'
// import { Link } from 'react-router-dom'

// export const categories = [
//   { id: 1, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png" },
//   { id: 2, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png" },
//   { id: 3, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png" },
//   { id: 4, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png" },
//   { id: 5, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png" },
//   { id: 6, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png" },
//   { id: 7, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-20.png" },
//   { id: 8, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png" },
//   { id: 9, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-16.png" },
//   { id: 10, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png" },
//   { id: 11, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png" },
//   { id: 12, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png" },
//   { id: 13, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png" },
//   { id: 14, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-18.png" },
//   { id: 15, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-14.png" },
//   { id: 16, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png" },
//   { id: 17, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png" },
//   { id: 18, imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png" },
// ];



// const CategorieItem = () => {
//   return (
//     <>
//    <div className="mt-12 mb-4 p-4 flex flex-wrap justify-around gap-6 bg-amber-200 rounded-xl">
//       {categories.map((item) => (
//         <div key={item.id} className="w-28 h-36 flex items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition">
//           <Link to={`/product?category=${item.id}`}>
//            <img
//             src={item.imageUrl}
//             alt={`category-${item.id}`}
//             className="object-cover w-32 h-34 rounded-lg "
//           /></Link>
         
//         </div>
//       ))}
//     </div>

//     </>
//   )
// }

// export default CategorieItem




















import React from "react";
import { Link } from "react-router-dom";

export const categories = [
  { id: 1, imageUrl: "https://cdn.grofers.com/.../paan-corner_web.png" },
  { id: 2, imageUrl: "https://cdn.grofers.com/.../Slice-2_10.png" },
  { id: 3, imageUrl: "https://cdn.grofers.com/.../Slice-3_9.png" },
  { id: 4, imageUrl: "https://cdn.grofers.com/.../Slice-8_4.png" },
  { id: 5, imageUrl: "https://cdn.grofers.com/.../Slice-6_5.png" },
  { id: 6, imageUrl: "https://cdn.grofers.com/.../Slice-7_3.png" },
  { id: 7, imageUrl: "https://cdn.grofers.com/.../Slice-20.png" },
  { id: 8, imageUrl: "https://cdn.grofers.com/.../Slice-17.png" },
  { id: 9, imageUrl: "https://cdn.grofers.com/.../Slice-16.png" },
  { id: 10, imageUrl: "https://cdn.grofers.com/.../Slice-9_3.png" },
  { id: 11, imageUrl: "https://cdn.grofers.com/.../Slice-13.png" },
  { id: 12, imageUrl: "https://cdn.grofers.com/.../Slice-11.png" },
  { id: 13, imageUrl: "https://cdn.grofers.com/.../Slice-12.png" },
  { id: 14, imageUrl: "https://cdn.grofers.com/.../Slice-18.png" },
  { id: 15, imageUrl: "https://cdn.grofers.com/.../Slice-14.png" },
  { id: 16, imageUrl: "https://cdn.grofers.com/.../Slice-3_9.png" },
  { id: 17, imageUrl: "https://cdn.grofers.com/.../Slice-8_4.png" },
  { id: 18, imageUrl: "https://cdn.grofers.com/.../Slice-6_5.png" },
];

const CategorieItem = () => {
  return (
    <div className="mt-12 mb-4 p-4 bg-amber-200 rounded-xl">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4">
        {categories.map((item) => (
          <Link
            key={item.id}
            to={`/product?category=${item.id}`}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={item.imageUrl}
              alt={`category-${item.id}`}
              className="w-full h-28 object-contain p-2"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorieItem;
