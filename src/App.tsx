import { useState } from "react";

const App = () => {
  const [valor, setValor] = useState(0);

  const handleClick = () => {
    setValor(valor + 1);
  }

  return (
    <div>
      <p>Você clicou {valor} vezes</p>
      <button onClick={handleClick}>Clique em mim</button>
    </div>
  );
}

export default App;