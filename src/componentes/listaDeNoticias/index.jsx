import Noticia from '../noticia';
import Paginador from '../paginador';
import Loading from '../loading'
import { useEffect, useState } from 'react';
import { getNoticias } from '../../servicios/noticias';

const ListaDeNoticias = ({ busqueda }) => {
    
    //componente que lista las noticias
    const Noticias = ({ noticias }) => {
        <>
            
            {noticias && noticias.map((val, index) => <Noticia key={index} {...val} />)}
        </>
    };
    
    const [noticias, setNoticias] = useState();
    const [loading, setLoading] = useState(false);

    const getNoticiasDesdeServicio = async (busqueda) => {
        setLoading(true);
        const respuesta = await getNoticias(busqueda);
        setNoticias(respuesta.articles);
        setLoading(false);
        console.log(noticias);
    }
    useEffect(() => {
        getNoticiasDesdeServicio(busqueda)
    }, [busqueda])

    if(loading) {
       return <Loading />
    }

    //const mostrarNoticias = [1,2,3].map(val => <Noticia />);
    
    return (
        <section> 
            <section>
                {noticias && noticias.map((val, index) => <Noticia key={index} {...val} />)}
            </section>
            <Noticias noticias={noticias} />
            <Paginador />
        </section> 
    );
}
export default ListaDeNoticias;