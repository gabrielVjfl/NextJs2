import axios from "axios";


import Get2 from './Get2'
const ApiAxios = ({ dados, dadosnew }:any) => (
  <div>


    <h1>Obtendo os valores da api com NEXT JS!!</h1>
{
  dados.map((item:any) => 
    <div key={item._id}>
      <h3>{item.title}</h3>
      <h4>+ R$  { item.value }</h4>
    </div>
  )
    }

<h2>Saidas</h2>

    <h5>
      {
        dadosnew.map((itens: any) => 
          <div key={itens._id}>
            <h5>{itens.title}</h5>
            <h6>- R$ { itens.value }</h6>
          </div>
        )
      }
    </h5>
 


    
  </div>
    
);

// Função get
ApiAxios.getInitialProps = async () => {
  let response = await axios.get("http://localhost:8040/api/entradas/list");
  let responsenew = await axios.get('http://localhost:8040/api/saidas/lista')

 // let responsetwo = await axios.get("http://localhost:8040/api/saidas/list")




  return {
    dados: response.data,
    dadosnew: responsenew.data
  
  };
};

export default ApiAxios;
