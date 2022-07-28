import { useState } from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.css';


const Buscador = (props) => {
    const [texto, setTexto] = useState('');
    const [disabled, setDisabled] = useState(true);

    
    const onTextoChange = (evento) => {
        setTexto(evento.target.value);

        //por alguna razón habilita con 4 y deshabilita con 2 caracteres
        if(texto.trim().length >= 3) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
    };

    const onBuscarClick = () => {
      if(texto.trim().length > 3) {
        props.onBuscar(texto);
      } else {
        alert('debes escribir un término de búsqueda de al menos 4 caracteres');
      }
    };

    const handleSubmit = event =>{
      event.preventDefault();
    };

    

    return (
      <form onSubmit={handleSubmit}>
        <TextField 
            id="outlined-basic" 
            label="Buscar noticias" 
            variant="outlined" 
            value={texto}    
            onChange={onTextoChange}          
        />
        <Button 
          disabled={disabled}
          variant="contained" 
          onClick={onBuscarClick}
          type="submit"
          id="boton"
          >Buscar
        </Button>


      </form>
    );
  }



  export default Buscador;  
