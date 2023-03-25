import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  async function loadData(name){
    let response;
    if(name === "wlkn"){
      response = await axios.get('/en/product-inventory/?id=92815999');
      setData(response.data.productInventory.variantId);
    }
    else{
      response = await axios.get('/rest/v2/tousSite-pr%7Cen_PR/products/012346000/stock?location=60061&fields=FULL', {
        headers: {
          'Rest-API-id': 'Maha4mmHxagCF4U4dcZK6MdywVvN2HNr9F7xbBH2s2ty97akdBafEKxwCmyfEQHn'
        }
      });

      setData(response?.data.product?.code);
    }
    //const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    //const response = await axios.get('https://cors-anywhere.herokuapp.com/https://www.wlknstore.com/en/product-inventory/?id=92815999');
    //
    console.log(response);
    
  }



  return (
    <>
      <button  onClick={(e) => loadData(e.target.textContent)}>wlkn</button>
      <button onClick={(e) => loadData(e.target.textContent)}>tous</button>
      <div>{data}</div>
    </>
  );
}

export default App;
