// import { getProducts } from "@/helpers";
// import { notFound } from "next/navigation";

// import { getProductsById } from "@/helpers";

// async function getData(id) {
//   const res = await fetch(
//     `https://fakestoreapiserver.reactbd.com/amazonproducts/${id}`
//   );
//   if (!res.ok) {
//     return notFound();
//   }
//   return res.json;
// }

// export default async function ProductDetailPage({ params }) {
//   const product = await getData(params.id);
//   console.log(product);
//   return (
//     <div>
//       {product?.map((item) => (
//         <div key={item.id}>
//           <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2  rounded-b-lg">
//             <div>
//               {" "}
//               <h3>{item.title}</h3>{" "}
//             </div>
//             <div>
//               {" "}
//               <p>Price: ${item.price}</p>
//             </div>
//             <div>
//               <p>{item.description}</p>
//             </div>
//           </div>
//           <div className="w-full group overflow-hidden">
//             <img
//               src={item.image}
//               alt={item.title}
//               style={{ maxWidth: "200px" }}
//               className="w-full h-full object-cover group-hover:scale-110 duration-200"
//             />
//           </div>{" "}
//         </div>
//       ))}
//     </div>
//   );
// }

// export async function getStaticProps({ params }) {
//   const products = await getProducts(); // Fetch all products
//   const product = products.find((p) => p.id === parseInt(params.id)); // Find product by ID
//   return {
//     props: {
//       product,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const products = await getProducts(); // Fetch all products
//   const paths = products.map((product) => ({
//     params: { id: product.id.toString() },
//   }));
//   return {
//     paths,
//     fallback: false, // Set to false if you want to return 404 for unknown IDs
//   };
// }

// export default function ProductDetailPage({ product }) {
//   // Render the product details
//   return (
//     <div>
//       <h1>Product Detail Page</h1>
//       <p>Title: {product.title}</p>
//       <p>Description: {product.description}</p>
//       {/* Render other product details */}
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   const product = await getProductsById(id); // Fetch product data by ID
//   console.log(product);
//   return {
//     props: {
//       product,
//     },
//   };
// }
import Link from "next/link";
import React from "react";

export default function Product({ item }) {
  return (
    <div>
      <Link href={`/main/${item.id}`}>
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
  );
}
