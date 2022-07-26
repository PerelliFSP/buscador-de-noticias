import Noticia from '../noticia';
import Paginador from '../paginador';
import Loading from '../loading'
import { useEffect, useState } from 'react';
import { getNoticias } from '../../servicios/noticias';

const ListaDeNoticias = ({ busqueda }) => {
    
    const [noticias, setNoticias] = useState();
    const [loading, setLoading] = useState(false);

    const getNoticiasDesdeServicio = async (busqueda) => {
        setLoading(true);
        const respuesta = await getNoticias(busqueda);
        console.log(respuesta);
        setLoading(false);
    }
    useEffect(() => {
        getNoticiasDesdeServicio(busqueda)
    }, [busqueda])

    return (
        <section> 
            <Noticia />
            <Paginador />
            <Loading />
        </section> 
    );
}
export default ListaDeNoticias;