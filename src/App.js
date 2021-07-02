import Header from './Components/Header';
import Form from './Components/Form';
import Resultado from './Components/Resultado';

import CategoriaProvider from './context/CategoriaContext.js';
import ResultadoProvider from './context/ResultadoContext';
import ModalProvider from './context/ModalContext';



function App() {
  return (
      <CategoriaProvider>
        <ResultadoProvider>
          <ModalProvider>
            <Header/>

            <div className="container mt-5">
              <div className="row">
                <Form/>
              </div>
                <Resultado/>
            </div>
            <div>
                
            </div>
            </ModalProvider>
        </ResultadoProvider>
      </CategoriaProvider>
    
    
  );
}

export default App;
