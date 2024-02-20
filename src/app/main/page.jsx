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
// import { getProducts } from "@/helpers";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// export async function fetchProducts() {
//   const products = await getProducts();
//   return products;
// }
// export async function getStaticProps() {
//   const products = await getProducts(); // Fetch all products
//   console.log(products);
//   return {
//     props: {
//       products,
//     },
//   };
// }

// export default function Main({ products }) {
//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products?.map((item) => (
//           <li key={item.id}>
//             <Link href="/products/[id]" as={`/products/${item.id}`}>
//               <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2  rounded-b-lg">
//                 <div>
//                   {" "}
//                   <h3>{item.title}</h3>{" "}
//                 </div>
//                 <div>
//                   {" "}
//                   <p>Price: ${item.price}</p>
//                 </div>
//                 <div>
//                   <p>{item.description}</p>
//                 </div>
//               </div>
//               <div className="w-full group overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{ maxWidth: "200px" }}
//                   className="w-full h-full object-cover group-hover:scale-110 duration-200"
//                 />
//               </div>{" "}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default async function Main() {
//   const product = await getProducts();
//   console.log(product);
//   return (
//     <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
//       {product?.map((item) => (
//         <div key={item.id}>
//           <Link href={`/products/${item.id}`}>
//             <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2  rounded-b-lg">
//               <div>
//                 {" "}
//                 <h3>{item.title}</h3>{" "}
//               </div>
//               <div>
//                 {" "}
//                 <p>Price: ${item.price}</p>
//               </div>
//               <div>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//             <div className="w-full group overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{ maxWidth: "200px" }}
//                 className="w-full h-full object-cover group-hover:scale-110 duration-200"
//               />
//             </div>{" "}
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }
import React from "react";
import Product from "../component/products/product";
const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export default async function Main() {
  const data = await getData();
  return (
    <div className="flex flex-col gap-10">
      {data.map((item) => (
        <div key={item.id}>
          <Product item={item} />
        </div>
      ))}
    </div>
  );
}
