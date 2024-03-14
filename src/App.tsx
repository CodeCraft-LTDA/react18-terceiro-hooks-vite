import { useState } from "react";

const App = () => {
  const [valor, setValor] = useState(0);
  const [logged, setLogged] = useState(false);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setValor(valor + 1);
  }

  const handleClick2 = () => {
    setLogged(!logged);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleClickCount = () => {
    setCount(count + 1);
    alert(count);
  }

  const handleClickCount2 = () => {
    // c != count
    setCount(c => c + 1); // 0 + 1 = 1
    alert(count);
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


      <div>
        <h2>{count}</h2>

        <button onClick={handleClickCount}>Adicionar</button>
      </div>

      <div>
        <h2>{count}</h2>

        <button onClick={handleClickCount2}>Adicionar</button>
      </div>
    </div>
  );
}

export default App;