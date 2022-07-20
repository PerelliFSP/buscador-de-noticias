import Noticia from '../noticia';
import Paginador from '../paginador';
import Loading from '../loading'

const ListaDeNoticias = () => {
    return (
        <section> 
            <Noticia />
            <Paginador />
            <Loading />
        </section> 
    );
}
export default ListaDeNoticias;