import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ name: "", price: "" });

  const { products } = useSelector((state) => state.products);

  return (
    <div className="p-9 w-1/2">
      <div className="flex flex-col gap-4">
        <input
          className="p-3 rounded-lg shadow-md w-full"
          value={formData.name}
          type="text"
          placeholder="Nome do Produto"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className="p-3 rounded-lg shadow-md w-full shadow-md"
          value={formData.price}
          type="text"
          placeholder="Preço"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <div className="flex gap-3 justify-center mb-4">
          <button
            className="bg-green-500 rounded-lg"
            onClick={() =>
              dispatch({ type: "ADD_PRODUCT", payload: { product: formData } })
            }
          >
            Salvar
          </button>
          <button
            className="bg-red-300 rounded-lg shadow-md"
            onClick={() => dispatch({ type: "CLEAR_LIST" })}
          >
            Limpar lista
          </button>
        </div>
      </div>

      <table className="w-full">
        <tbody>
          {/* <ul className="w-full"> */}
          {products.map((product, index) => (
            // <li key={index} className="w-full flex items-center gap-3">
            <tr
              key={index}
              className="w-100 flex justify-between items-center border-y"
            >
              <td className="grow text-lg font-light pl-3">{product.name}</td>
              <td className="grow text-lg font-light pl-3">{product.price}</td>
              <td>
                <button
                  className="bg-red-400 rounded-lg"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_PRODUCT",
                      payload: { index: index },
                    })
                  }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
          {/* </ul> */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
