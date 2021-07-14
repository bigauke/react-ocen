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
      'https://blog.dramei.com.br/wp-content/uploads/2015/01/golden-retriever-bolinha.jpg'
  },

  {
    id: 2,
    nome: 'Labrador',
    imagemUrl:
      'https://conviteasaude.com.br/wp-content/uploads/2019/03/labrador-raca.jpg'
  }
];

function Item(props) {
  const indice = props.indice;

  const item = lista[indice];

  return (
    <div>
      {item.nome}
      <br />
      <img src={item.imagemUrl} alt={item.nome} width="200" />
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
