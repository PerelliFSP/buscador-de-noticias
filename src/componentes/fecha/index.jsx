import { DateTime } from "luxon";
const Fecha = ({ publishedAt }) => {
    
const fechaNoticia = DateTime.fromISO(publishedAt);
const fechaAMostrar = fechaNoticia.toFormat('DD');
    
    return (

        <>{fechaAMostrar}</>
                 
        );
}
export default Fecha;

//publishedAt