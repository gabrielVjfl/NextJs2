import axios from "axios";

const Get2 = ({ dados }: any) => (
  <div>

    {
      dados.map((item:any) => 
        <div key={item._id}>
          <h2>{item.title}</h2>
          <h3>- R$ { item.value }</h3>
        </div>
       
      )
    }
  
    </div>
)

Get2.getInitialProps = async () => {
  let response = await axios.get('http://localhost:8040/api/saidas/list')

  return {
    dados: response.data
  }
}

export default Get2