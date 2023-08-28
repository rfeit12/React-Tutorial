import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <h1>Olá!</h1>
      <p>Teste react</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
