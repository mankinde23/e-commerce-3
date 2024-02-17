export const getProducts = async () => {
  const res = await fetch(
    "https://fakestoreapiserver.reactbd.com/amazonproducts"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();

};