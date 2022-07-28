import Noticia from '../noticia';
import Paginador from '../paginador';
import Loading from '../loading'
import { useEffect, useState } from 'react';
import { getNoticias } from '../../servicios/noticias';
import './style.css'

const ListaDeNoticias = ({ busqueda }) => {
    
    /*componente que lista las noticias
    const Noticias = ({ noticias }) => {
        <>
            
            {noticias && noticias.map((val, index) => <Noticia key={index} {...val} />)}
        </>
    };

                <Noticias noticias={noticias} />
    */
    const [noticias, setNoticias] = useState();
    const [loading, setLoading] = useState(false);
    const [pagina, setPagina] = useState(1);
    const [cantidadPaginas, setCantidadPaginas] = useState(0);

    const getNoticiasDesdeServicio = async (busqueda, pagina) => {
        setLoading(true);
        const respuesta = await getNoticias(busqueda, pagina);
        setNoticias(respuesta.articles);
        const paginasTotales = Math.ceil(parseInt(respuesta.totalResults)/10);
        setCantidadPaginas(paginasTotales);
        setLoading(false);
    };

    const onChangePaginador = (_evento, p) => {
        setPagina(p);
    };

    useEffect(() => {
        getNoticiasDesdeServicio(busqueda, pagina)
    }, [busqueda, pagina])

    if(loading) {
       return <Loading />
    };

    //const mostrarNoticias = [1,2,3].map(val => <Noticia />);
    if (!noticias) {
        return null;
    }
    return (
        <section> 
            <section>
                {noticias && noticias.map((val, index) => <Noticia key={index} {...val} />)}
            </section>

            <Paginador page={pagina} count={cantidadPaginas} onChange={onChangePaginador} id="paginador"/>
        </section> 
    );
}
export default ListaDeNoticias;