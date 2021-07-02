import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const CategoriaContext = createContext();

const CategoriaProvider = (props) => {

  const [Categorias, setCategorias] = useState([]);

  useEffect( () => {
      const cargarCategorias = async() => {
            const result = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      
            setCategorias(result.data.drinks);       
      }

      cargarCategorias();
    

  }, [])

  return (  
        <CategoriaContext.Provider
            value={{
              Categorias
            }}
        >

          {props.children}
        </CategoriaContext.Provider>
  )
}
 
export default CategoriaProvider;