import React from "react";
import { IoMdCart } from "react-icons/io";
const getData = async (slug) => {
  //   const res = await fetch(
  //     `https://fakestoreapiserver.reactbd.com/amazonproducts/${slug}`
  //   );
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch products");
  //   }
  //   return res.json();
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};
export default async function Singlepage({ params }) {
  const { slug } = params;
  const item = await getData(slug);
  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
      <div className="w-full group overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          style={{ maxWidth: "200px" }}
          className="w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>{" "}
      <div className="flex flex-col justify-center gap-y-10">
        <div>
          {" "}
          <h3 className="text-3xl font-semibold">{item.title}</h3>{" "}
        </div>
        <div>
          {" "}
          <p className="text-xl font-semibold">Price: ${item.price}</p>
        </div>
        <div>
          <p className="text-lightText">{item.description}</p>
        </div>
        <div className="flex items-center cursor-pointer group">
          <button className="bg-darkText text-slate-100 px-6 py-3 text-sm uppercase flex items-center border-r-[1px] border-r-slate-500">
            add to cart
          </button>
          <span className="bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-orange-500 duration-200 py-3">
            <IoMdCart />
          </span>
        </div>
      </div>
    </div>
  );
}
