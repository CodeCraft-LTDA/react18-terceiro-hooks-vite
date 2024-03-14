import { useState } from "react";

const App = () => {
  const [valor, setValor] = useState(0);
  const [logged, setLogged] = useState(false);

  const handleClick = () => {
    setValor(valor + 1);
  }

  const handleClick2 = () => {
    setLogged(!logged);
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
    </div>
  );
}

export default App;