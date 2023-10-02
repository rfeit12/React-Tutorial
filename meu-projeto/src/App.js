import './App.css';
import { useState } from 'react';
import SeuNome from './components/SeuNome';

function App() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  return (
    <div className="App"> 
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      {nome}
    </div>
  );
}

export default App;
