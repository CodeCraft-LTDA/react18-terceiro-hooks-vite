import { useState } from "react";

const App = () => {
  const [valor, setValor] = useState(0);
  const [logged, setLogged] = useState(false);
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValor(valor + 1);
  }

  const handleClick2 = () => {
    setLogged(!logged);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <p>Você clicou {valor} vezes</p>
      <button onClick={handleClick}>Clique em mim</button>

      <div>
        {logged && <p>Usuario Logado</p>}
        <button onClick={handleClick2}>
          {logged ? 'Logout' : 'Login'}
        </button>
      </div>

      <div>
        {value == "" ? 
        <>
          <input type="text" value={value} onChange={handleChange}/>
          <p>{value}</p>
        </> : <p>Valor não pode ser vazio</p>
        }
      </div>
    </div>
  );
}

export default App;