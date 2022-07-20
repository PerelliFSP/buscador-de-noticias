import { useState } from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

/*const Buscador = () => {
    return "Buscador";
}
export default Buscador; */


const Buscador = () => {
    const [texto, setTexto] = useState('');

    const onTextoChange = (evento) => {
        setTexto(evento.target.value);
    };
    const onBuscarClick = () => {
        alert(texto);
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
        <Button variant="contained" onClick={onBuscarClick}>Contained</Button>


      </section>
    );
  }



  export default Buscador;  
