import './App.css';
import Footer from './componentes/Footer/Footer';
import Upper from './componentes/Upper/Upper';
import Contenido from './componentes/Contenido/Contenido';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contacto from './componentes/Subpaginas/Contacto/Contacto';
import Compra from './componentes/Subpaginas/Compra/Compra';
import Home from './componentes/Subpaginas/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Upper/>{/* Barra de navegacion */}
        <Routes>

          <Route path="/src/componentes/Subpaginas/Contacto/Contacto" element={<Contacto/>}/>

          <Route path="/" element={<Home/>}/>

          <Route path="/src/componentes/Subpaginas/Compra/Compra" element={<Compra/>}/>

        </Routes>
      </BrowserRouter>
      <Footer/> {/* Footer */}
    </div>
  );
}

export default App;
