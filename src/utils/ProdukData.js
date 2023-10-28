export const setDataToLocasStorage = (data) => {
  const produkData = JSON.parse(localStorage.getItem("produk_data") || "[]");
  produkData.push(data);
  localStorage.setItem("produk_data", JSON.stringify(produkData));
};

export const getDataFromLocalStorage = () => {
  const produkData = JSON.parse(localStorage.getItem("produk_data") || "[]");
  return produkData;
};
