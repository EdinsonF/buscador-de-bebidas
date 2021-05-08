import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const ModalConsumer = createContext();

const ModalProvider = (props) => {

  const [IdReceta, setIdReceta] = useState(null);
  const [Receta , setReceta]    = useState({});

 useEffect(() => {
      if(IdReceta){
          
        const consultar = async () => {
            const resultado = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${IdReceta}`);

            setReceta(resultado.data.drinks[0]);
        }

        consultar();
      }
 }, [IdReceta]);


  return (

      <ModalConsumer.Provider
        value={{
          setIdReceta,
          Receta,
          setReceta
        }}
      >
            
            {props.children}
      </ModalConsumer.Provider>
  )
  

}


export default ModalProvider;