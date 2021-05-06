import React from 'react';



const Listado = ({list}) => {
  return ( 

    <div className="col-md-4 mb-3">
      <div className="card">
        <h3 className="card-header">{list.strDrink}</h3>

      </div>
    </div> 
 
   );
  
}
 
export default Listado;