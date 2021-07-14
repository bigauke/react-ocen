import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

/*
CRUD (create, read (single & all)), update, delelete)

create -> form de criação
read all -> listagens dos itens cadastrados
read single -> view de um item especifico
updadte -> form de edição
delete -> remover um item especifico
*/

// 1 - READ all
// Precisa dos dados que serão exibidos
//a estrytyra desses dadis orecusa oissyur "Nome" e "URL" da imagem
// decida qual será o tema da sua aplicação
// o meu será de raças de cachorro
const lista = [
  {
    id: 1,
    nome: 'Golden Retriver',
    imagemUrl:
      'https://www.agrosete.com.br/wp-content/uploads/2020/12/Cachorro-com-a-l%C3%ADngua-de-fora-%C3%A9-sede-1.jpg'
  },

  {
    id: 2,
    nome: 'Labrador',
    imagemUrl:
      'https://blog.cobasi.com.br/wp-content/uploads/2020/12/filhote-de-labrador-principal.jpeg'
  }
];

function Item(props) {
  const indice = props.indice;

  const item = lista[indice];

  return (
    <div>
      {item.nome}
      <br />
      <img
    </div>
  );
}

function Lista() {
  return (
    <div>
      {lista.map((item, index) => (
        <Item indice={index} key={index} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Lista />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
