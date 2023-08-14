import { useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import { ProductCard } from "../components/products/ProductCard";
import { ImFileEmpty } from "react-icons/im";

export default function GetProducts() {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No existen productos ingresados
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </>
  );
}