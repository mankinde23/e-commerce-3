// import { getProducts } from "@/helpers";
// import React from "react";

// export default function Main() {
//   const product = await getProducts();
//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//           <p>Price: ${item.price}</p>
//           <p>{item.description}</p>
//           <img
//             src={item.image}
//             alt={item.title}
//             style={{ maxWidth: "200px" }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
import { getProducts } from "@/helpers";
import Image from "next/image";
import React from "react";

export default async function Main() {
  const product = await getProducts();
  console.log(product);
  return (
    <div>
      {product?.map((item) => (
        <div key={item.id}>
          <div>
            {" "}
            <h3>{item.title}</h3>{" "}
          </div>
          <div>
            {" "}
            <p>Price: ${item.price}</p>
          </div>
          <div>
            <p>{item.description}</p>
          </div>
          <div className="w-full group overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              style={{ maxWidth: "200px" }}
              className="w-full h-full object-cover group-hover:scale-110 duration-200"
            />
          </div>{" "}
        </div>
      ))}
    </div>
  );
}
