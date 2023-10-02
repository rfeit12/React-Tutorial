import './App.css';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

function App() {

  const itens = []

  return (
    <div className="App"> 
      <h1>Renderização Condicional</h1>
      <OutraLista itens={itens}/>
    </div>
  );
}

export default App;
