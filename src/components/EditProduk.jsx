import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";

import {
  getDataFromLocalStorage,
  setDataToLocasStorage,
} from "../utils/ProdukData";

export default function EditProduk({ product }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <FiEdit />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Form Edit Produk</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form>
                    <div className="mb-6">
                      <label
                        htmlFor="nama_produk"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Nama Produk
                      </label>
                      <input
                        type="text"
                        id="nama_produk"
                        className="bg-white border text-black text-sm rounded-lg focus:ring-black-500 focus:border-black-500 placeholder-gray-400 block w-full p-2.5"
                        placeholder="Nama produk..."
                        value={product.name}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="stok_produk"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Stok Produk
                      </label>
                      <input
                        type="number"
                        id="stok_produk"
                        className="bg-white border text-black text-sm rounded-lg focus:ring-black-500 focus:border-black-500 placeholder-gray-400 block w-full p-2.5"
                        placeholder="100"
                        value={product.stok}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="harga_produk"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Harga Produk
                      </label>
                      <input
                        type="number"
                        id="harga_produk"
                        className="bg-white border text-black text-sm rounded-lg focus:ring-black-500 focus:border-black-500 placeholder-gray-400 block w-full p-2.5"
                        placeholder="500000"
                        value={product.price}
                        required
                      />
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Batal
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Edit Produk
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
