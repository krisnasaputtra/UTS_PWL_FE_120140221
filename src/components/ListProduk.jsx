import { useState, useEffect } from "react";
import Checkout from "./Checkout";

import { getDataFromLocalStorage } from "../utils/ProdukData";

const ListProduk = () => {
  const [produkData, setProdukData] = useState([]);

  useEffect(() => {
    const data = getDataFromLocalStorage();
    setProdukData(data);
  }, []);

  return (
    <>
      {produkData.map((produk) => (
        <div className="flex flex-col" key={produk.id}>
          <img
            src="https://source.unsplash.com/featured/100x100"
            alt="..."
            width={100}
            height={100}
            className="w-full object-cover"
          />
          <div className="border border-gray-100 bg-white p-6">
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {produk.name}
            </h3>
            <p className="mt-1.5 text-sm text-gray-700">Rp {produk.price}</p>
            <Checkout />
          </div>
        </div>
      ))}
    </>
  );
};

export default ListProduk;
