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
import Link from "next/link";
import React from "react";

export default async function Main() {
  const product = await getProducts();
  console.log(product);
  return (
    <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {product?.map((item) => (
        <div key={item.id}>
          <Link href={{ pathname: "/products", query: { id: item?.id } }}>
            <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2  rounded-b-lg">
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
            </div>
            <div className="w-full group overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                style={{ maxWidth: "200px" }}
                className="w-full h-full object-cover group-hover:scale-110 duration-200"
              />
            </div>{" "}
          </Link>
        </div>
      ))}
    </div>
  );
}
