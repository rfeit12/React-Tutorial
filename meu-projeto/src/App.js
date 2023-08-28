import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Renan';

  function sum(a, b) {
    return a + b;
  }

  const url ='https://via.placeholder.com/150'

  return (
    <div className="App"> 
      <h1>Olá, {name}!</h1>
      <p>Teste react</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
