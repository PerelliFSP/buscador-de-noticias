import Noticia from '../noticia';
import Paginador from '../paginador';
import Loading from '../loading'
import { useEffect, useState } from 'react';
import { getNoticias } from '../../servicios/noticias';
import './style.css'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import MensajeError from '../mensajeError';

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
    const [cantidadNoticias, setCantidadNoticias] = useState(0);
    const [bienvenido, setBienvenido] = useState();

    const getNoticiasDesdeServicio = async (busqueda, pagina) => {
        setLoading(true);
        const respuesta = await getNoticias(busqueda, pagina);
        setBienvenido(respuesta.code)
        setNoticias(respuesta.articles);
        setCantidadNoticias(respuesta.totalResults);
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

    /*la busqueda se realiza inmediatamente cuando carga la página, 
    para que no aparezca el mensaje de error automáticamente, está esta lógica*/
    if(bienvenido === 'parametersMissing') {
        return "Bienvenido";
    };

    if(loading) {
       return <Loading />
    };

    

    if (!noticias) {
        return (
            <>
                <MensajeError />
            </>
        );
    }

    //const mostrarNoticias = [1,2,3].map(val => <Noticia />);
    return (
        <section> 
            <Box>
                <Typography id="leyenda">
                    Está viendo 10 noticias de un total de {cantidadNoticias} resultados.
                </Typography>
            </Box>
            <section role="listaDeNoticias">
                {noticias && noticias.map((val, index) => <Noticia key={index} {...val} />)}
            </section>

            <Paginador page={pagina} count={cantidadPaginas} onChange={onChangePaginador} id="paginador"/>
        </section> 
    );
}
export default ListaDeNoticias;