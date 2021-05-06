import React, {useContext} from 'react';
import Listado from './Listado';

import {ResultContext} from '../context/ResultadoContext';


const Resultado = () => {

  const {Lista} = useContext(ResultContext);


  return ( 

      <div className="row mt-5">
          {Lista.map(list => (
            
              <Listado 
                  key={list.idDrink}
                  list={list}

              />
          ))}
      </div>
        
   );
}
 
export default Resultado;