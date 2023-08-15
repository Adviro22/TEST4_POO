import React from "react";
import { useProducts } from "../../context/ProductContext";
import { ButtonLink } from "../ui";

export function ProductList({ products }) { // Cambio aquí para recibir 'products'
  const { deleteProduct } = useProducts();

  return (
    <table className="border-collapse border border-black mx-auto">
      <thead>
        <tr>
          <th className="border-black border-4 p-2">Nombre</th>
          <th className="border-black border-4 p-2">Precio $</th>
          <th className="border-black border-4 p-2">Stock</th>
          <th className="border-black border-4 p-2">Botones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td className="border-black border-4 p-2">{product.nombre}</td>
            <td className="border-black border-4 p-2">{product.precio}</td>
            <td className="border-black border-4 p-2">{product.stock}</td>
            <td className="border-black border-4 p-2">
              <ButtonLink to={`/product/${product._id}`}>Edit</ButtonLink>
              <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
