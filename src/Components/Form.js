import React, {useContext, useState} from 'react';
import {CategoriaContext} from '../context/CategoriaContext';
import {ResultContext} from '../context/ResultadoContext';



const Form = () => {

  const [Datos, setDatos] = useState({
    nombre:'',
    categoria: ''
  });

  const [Error, setError] = useState(false);

  const {nombre, categoria} = Datos;

  const {Categorias} = useContext(CategoriaContext);
  const {setConsultar} = useContext(ResultContext);

  


  const handleInput = (e) =>{
    setDatos({
      ...Datos,
      [e.target.name]: e.target.value
    });

  }

  const enviarForm = (e) => {
    e.preventDefault();
    //validamos
    if(nombre === ''  || categoria === ''){
      setError(true);
      return;
    }

    setError(false);
    //enviamos
    setConsultar(Datos);

  }


  return ( 
    <>
    
        <form className="col-12" onSubmit={enviarForm}>
          { Error ? <div className="alert alert-warning" role="alert">Todos los campos son oblogatorios!</div> : null}
        
          <fieldset className="text-center">
            
          <legend> Busca bebidas por Categoria o Ingredientes</legend>
          </fieldset>

          <div className="row mt-4">
            <div className="col-md-4">
                <input
                  name="nombre"
                  className="form-control"
                  type="text"
                  placeholder="Buscar por Ingrediente"
                  onChange={handleInput}
                />
            </div>

            <div className="col-md-4">
              <select
                className="form-control"
                name="categoria"
                onChange={handleInput}
              >
                  <option value="">--Seleccione Categoria--</option>
                  { Categorias.map(categoria => (
                      <option 
                          key={categoria.strCategory}
                          value={categoria.strCategory}
                      >{categoria.strCategory}</option>
  ))}
            </select>      
            </div>

            <div className="col-md-4">
              <input
                  type="submit"
                  className="btn btn-block btn-primary"
                  value="Buscar Receta"
              />
            </div>

            
          </div>
        </form>
    </>
   );
}
 
export default Form;