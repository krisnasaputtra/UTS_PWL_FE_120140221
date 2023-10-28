import { useState, useEffect } from "react";
import { BsTrashFill } from "react-icons/bs";

import AddProduk from "../components/AddProduk";
import EditProduk from "../components/EditProduk";

import { getDataFromLocalStorage } from "../utils/ProdukData";

const Dashboard = () => {
  const [produkData, setProdukData] = useState([]);

  useEffect(() => {
    const data = getDataFromLocalStorage();
    setProdukData(data);
  }, []);

  const TABLE_HEAD = [
    "ID Produk",
    "Nama Produk",
    "Stok Produk",
    "Harga Produk",
    "Action",
  ];

  const TABLE_FOOT = [
    "ID Produk",
    "Nama Produk",
    "Stok Produk",
    "Harga Produk",
    "Action",
  ];

  return (
    <div className="bg-white m-5 rounded-lg flex flex-col justify-center items-center min-h-screen">
      <div className="p-8">
        <AddProduk />
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className="font-bold text-black">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {produkData.map(({ id, name, stok, price, image }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{stok}</td>
                <td>{price}</td>
                <td>
                  <div className="flex gap-3">
                    <EditProduk product={{ id, name, stok, price, image }} />
                    <button className="text-[#A30D11]">
                      <BsTrashFill />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="font-bold text-black">
            <tr>
              {TABLE_FOOT.map((head) => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
