import React, {useContext, useState} from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


import { ModalConsumer } from '../context/ModalContext';



function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}


const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const llenarLi = info => {
  let arr = [];
  if(info){
      for (let i = 1; i < 16; i++) {
        
        if(info[`strIngredient${i}`]){
          
          arr.push(
            <li key={i}> {info[`strIngredient${i}`]} : { info[`strMeasure${i}`]}</li> );

        }
        
      }
  }

  return arr;
}

  const Listado = ({Lista}) => {

    /* Asignar estilos */
      const [modalStyle] = useState(getModalStyle);
      const [open, setOpen] = useState(false);
      const classes = useStyles();
    /* Asignar estilos */

      const {setIdReceta, setReceta} = useContext(ModalConsumer);
      const {Receta} = useContext(ModalConsumer);


    
      
      const handleOpen = () => {
          setOpen(true);
        }
      
      const handleClose = () => {
        setOpen(false);
        setIdReceta(null);
        setReceta({});
      }
      
      const enviarConsulta = (id) => {
        setIdReceta(id);
     }

  return ( 
  <>
    {
      Lista.map(list => (
    
                  <div className="col-md-4 mb-3" key={list.idDrink}>
                    <div className="card" >
                      <h2 className="card-header">{list.strDrink}</h2>
                      <div className="card-body">
                      <img className="card-img-top imagen" src={list.strDrinkThumb} alt={`Imagen de ${list.strDrink  }`}/>
                      
                      </div>
                      
                      <div className="card-footer ">
                          <button type="button" className="btn btn-block btn-primary pie" onClick={ () => {
                            enviarConsulta(list.idDrink);
                            handleOpen();
                          }}>
                            Ver Receta
                          </button>
                      </div>
                    </div>
                  </div> 
      ))
    }
        

        <div>
            <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={open}
                  onClose={handleClose}
              >
              <div style={modalStyle} className={classes.paper}>
                  <h2 id="simple-modal-title">{Receta.strDrink}</h2>
                  <p id="simple-modal-description">
                      {Receta.strInstructions}
                  </p>

                  <img className="img-fluid my-4" src={Receta.strDrinkThumb} alt={`Imagen de ${Receta.strDrink  }`} width="400"/>
                  
                  <h3>Ingredientes y cantidades</h3>
                  <ul>
                      {llenarLi(Receta)}
                  </ul>
              </div>
            </Modal>
        </div>

  </>
);
  
}
 
export default Listado;