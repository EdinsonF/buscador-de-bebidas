import React, {useContext} from 'react';
import Listado from './Listado';

import {ResultContext} from '../context/ResultadoContext';


const Resultado = () => {

  const {Lista} = useContext(ResultContext);



  return ( 

      <div className="row mt-5">
       
              <Listado 
                    Lista={Lista}
              />

      </div>
        
   );
}
 
export default Resultado;