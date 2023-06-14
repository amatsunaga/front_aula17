import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ nome: "", price: "" });

  const { products } = useSelector((state) => state.products);

  return (
    <>
      {/* <h1>Hello World</h1>
      <h2>{user}</h2>
      <h4>{login}</h4>
      <p>{JSON.stringify(products)}</p> */}
      <div>
        <input
          value={formData.name}
          type="text"
          placeholder="Nome do Produto"
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        />
        <input
          value={formData.price}
          type="text"
          placeholder="Preço"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <br />
        <button
          onClick={() =>
            dispatch({ type: "ADD_PRODUCT", payload: { product: formData } })
          }
        >
          Salvar
        </button>
        <button onClick={() => dispatch({ type: "CLEAR_LIST" })}>
          Limpar lista
        </button>
      </div>

      <ul>
        {products.map((product, index) => (
          <>
            <li key={index}>{JSON.stringify(product)}</li>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_PRODUCT", payload: { index: index } })
              }
            >
              Remover
            </button>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
