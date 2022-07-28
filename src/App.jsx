import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from "./componentes/footer";
import Header from "./componentes/header";
import BuscadorDeNoticias from './paginas/buscadorDeNoticias';
import Error from "./paginas/error";

function App() {
  return (
    <>
    <Header />

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<BuscadorDeNoticias />} />
          <Route path="buscador" element={<BuscadorDeNoticias />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    
    <Footer/>
    </>
  );
}

export default App;
