import React from "react";
import { useProducts } from "../../context/ProductContext";
import { ButtonLink } from "../ui";

export function ProductList({ products }) { // Cambio aquí para recibir 'products'
  const { deleteProduct } = useProducts();

  return (
    <table className="border-collapse border border-black mx-auto">
      <thead className="bg-red-800">
        <tr>
          <th className="border-black border-4 p-2 text-xl text-black"><b>Nombre del Producto</b></th>
          <th className="border-black border-4 p-2 text-xl text-black"><b>Precio</b></th>
          <th className="border-black border-4 p-2 text-xl text-black"><b>Stock</b></th>
          <th className="border-black border-4 p-2 text-xl text-black"><b>Botones</b></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td className="border-black border-4 p-2 text-black">{product.nombre}</td>
            <td className="border-black border-4 p-2 text-black">$ {product.precio}</td>
            <td className="border-black border-4 p-2 text-black">{product.stock}</td>
            <td className="border-black border-4 p-2 text-black">
              <ButtonLink to={`/product/${product._id}`}>Edit</ButtonLink>
              <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
