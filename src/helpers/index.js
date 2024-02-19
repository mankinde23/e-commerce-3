// export const getProducts = async () => {
//   const res = await fetch(
//     "https://fakestoreapiserver.reactbd.com/amazonproducts"
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }
//   return res.json();
// };
// // helpers/products.js

// export async function getProductsById(id) {
//   try {
//     const response = await fetch(
//       `https://fakestoreapiserver.reactbd.com/amazonproducts/${id}`
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch product");
//     }
//     const product = await response.json();
//     return product;
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     throw error; // Rethrow the error to handle it in the calling component
//   }
// }
