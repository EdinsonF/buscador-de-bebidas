import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ResultContext = createContext(); 

const ResultadoProvider = (props) => {
  const [Consultar, setConsultar] = useState([]);
  const {nombre , categoria} = Consultar;

  const [Lista, setLista] = useState([])

  useEffect(() => {
    
    const consultarAPI = async () => {

      if(Consultar.length !== 0){
        const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`);

        setLista(result.data.drinks);
      }
        
    }

    consultarAPI();
    
  }, [Consultar,categoria, nombre])

  return ( 

    <ResultContext.Provider
      value={{
        setConsultar,
        Lista
      }
      }
    >
      {props.children}
    </ResultContext.Provider>
   );
}
 
export default ResultadoProvider;