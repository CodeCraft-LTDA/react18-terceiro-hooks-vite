import { useState } from "react";

const App = () => {
  const [valor, setValor] = useState(0);
  const [logged, setLogged] = useState(false);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const [fullName, setFullName] = useState({name: "", lastName: ""});
  const [tasks, setTasks] = useState<{label: string, done: boolean}[]>([]);
  const [inputValue, setInputValue] = useState("");

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

  const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName({...fullName, name: e.target.value});
  }

  const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName({...fullName, lastName: e.target.value});
  }

  const handleAddTask = () => {
    if (inputValue == "")  return;

    //metodo 1
    setTasks([...tasks, {label: inputValue, done: false}]);

    //metodo 2
    // setTasks(tasks.concat([inputValue]))

    //metodo 3
    // const newTasks = [...tasks];
    // newTasks.push(inputValue);
    // setTasks(newTasks);

    setInputValue("");
  }

  const handleDele = (index: number) => {
    setTasks(tasks.filter((_, i) => i != index));

  }

  const handleToggleDone = (key: number) => {
    const newTasks = [...tasks];
    newTasks[key].done = !newTasks[key].done;
    setTasks(newTasks);
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

      <div>
        <input type="text" value={fullName.name} onChange={handleChangeFirstName}/>
        <input type="text" value={fullName.lastName} onChange={handleChangeLastName}/>
        <p>{fullName.name} {fullName.lastName}</p>
      </div>

      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleAddTask}>Adicionar</button>
        <ul>
          {tasks.map((value, key) => (
            <li key={key}><input type="checkbox" checked={value.done} onChange={() => handleToggleDone(key)}/> {value.label} - <button onClick={() => handleDele(key)}>Excluir</button></li>
          ))}
        </ul>
      </div>
      

    </div>
  );
}

export default App;