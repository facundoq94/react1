import logo from './assets/logo.svg';
import './styles/App.css';

import Film from './components/film';
import Form from './components/form';

var titulo = "la gran estafa";

function App() {
  return (
    <div className='App'>
    <Film titulo={titulo} />

    <Form />
    </div>
  );
}

export default App;
