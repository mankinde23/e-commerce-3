import React from "react";
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
    <div>
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
    </div>
  );
}
