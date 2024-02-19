import { data } from "autoprefixer";
import Banner from "./component/banner/Banner";
import Main from "./main/page";
import { getProducts } from "@/helpers";
// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// async function getData() {
//   const res = await fetch(
//     "https://fakestoreapiserver.reactbd.com/amazonproducts",
//     { cache: "force-cache" }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json;
// }
// console.log()
// async function getData() {
//   const res = await fetch(
//     "https://fakestoreapiserver.reactbd.com/amazonproducts",
//     { cache: "force-cache" }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json(); // Note: Need to call the function res.json() to parse the JSON data
// }

// async function fetchData() {
//   try {
//     const data = await getData();
//     console.log(data); // Log the response data
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchData();

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-between p-24 bg-black  text-white w-full">
      <Main />
    </div>
  );
}

// pages/index.js

// import { useEffect, useState } from "react";

// export async function getServerSideProps() {
//   try {
//     const res = await fetch(
//       "https://fakestoreapiserver.reactbd.com/amazonproducts",
//       { cache: "force-cache" }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const data = await res.json();
//     return { props: { data } };
//   } catch (error) {
//     console.error(error);
//     return { props: { data: [] } };
//   }
// }

// export default function Home({ data }) {
//   return (
//     <main className="flex h-screen flex-col items-center justify-between p-24 bg-black text-white w-full">
//       {data.map((item) => (
//         <div key={item.id}></div>
//       ))}
//     </main>
//   );
// }
