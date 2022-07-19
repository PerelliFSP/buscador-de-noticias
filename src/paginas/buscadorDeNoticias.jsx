import { React, useState } from 'react';
import Buscador from '../componentes/buscador';
import ListaDeNoticias from '../componentes/listaDeNoticias';
import Noticia from '../componentes/noticia';
import Paginador from '../componentes/paginador';
import Loading from '../componentes/loading';

const BuscadorDeNoticias = () =>{

    return (
        <>
            <section>
                <p>página - Buscador de películas</p>
            </section>
            
            <section> 
                <Buscador />
                <ListaDeNoticias />
                <Noticia />
                <Paginador />
                <Loading />
            </section>
        </>
    );
}

export default BuscadorDeNoticias;