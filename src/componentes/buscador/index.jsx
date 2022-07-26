import { useState } from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

/*const Buscador = () => {
    return "Buscador";
}
export default Buscador; */


const Buscador = (props) => {
    const [texto, setTexto] = useState('');

    const onTextoChange = (evento) => {
        setTexto(evento.target.value);
    };
    const onBuscarClick = () => {
      if(texto.length > 3) {
        props.onBuscar(texto);
      }
    };
    
    return (
      <section>
        <TextField 
            id="outlined-basic" 
            label="Buscar" 
            variant="outlined" 
            value={texto}    
            onChange={onTextoChange}
            
        />
        <Button variant="contained" onClick={onBuscarClick}>Buscar</Button>


      </section>
    );
  }



  export default Buscador;  
