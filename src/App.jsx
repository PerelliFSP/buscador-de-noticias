import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import BuscadorDeNoticias from './paginas/buscadorDeNoticias';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<BuscadorDeNoticias />} />
          <Route path="buscador" element={<BuscadorDeNoticias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
