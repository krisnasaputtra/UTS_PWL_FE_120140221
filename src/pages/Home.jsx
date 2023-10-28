import { AiOutlineShoppingCart } from "react-icons/ai";

import ListProduk from "../components/ListProduk";

const Home = () => {
  return (
    <>
      <div className="flex flex-col m-5 gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold ">List Produk</h1>
        <div className="flex flex-col gap-5">
          <div className="flex justify-end items-end">
            <AiOutlineShoppingCart
              size={40}
              className="cursor-pointer"
              onClick={() => alert("Hello")}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <ListProduk />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
