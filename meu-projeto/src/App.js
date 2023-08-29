import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = 'Maria';
  return (
    <div className="App"> 
      <HelloWorld />
      <SayMyName name='Renan' />
      <SayMyName name='João' />
      <SayMyName name={nome} />
      <Pessoa 
        nome='Marcos'
        idade='28'
        profissao='Programador'
        foto='https://via.placeholder.com/150'
      />
      <List />
    </div>
  );
}

export default App;
