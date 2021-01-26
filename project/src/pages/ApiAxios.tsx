import axios from "axios";
import styled from 'styled-components'


const ApiAxios = ({ dados }:any) => (
  <div>

    <h1>Obtendo os valores da api com NEXT JS</h1>
{
  dados.map((item:any) => 
    <div key={item._id}>
      <h3>{item.title}</h3>
      <h4>R$ { item.value }</h4>
    </div>
  )
}
  </div>
    
);
// Função get
ApiAxios.getInitialProps = async() => {
  let response = await axios.get("http://localhost:8040/api/entradas/list");

  console.log(response);

  return {
    dados: response.data,
  };
};

export default ApiAxios;
