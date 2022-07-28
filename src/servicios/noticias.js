import { API_KEY, NEWS_API_HOST } from "./constantes";
//https://newsapi.org/v2/everything?q=bitcoin&apiKey=a86c1db03ade4f39acf777ed3c2df2de&page=1&pageSize=10&language=es

export const getNoticias = async (criterioBusqueda = '', pagina = 1)  => {
    try {
        const respuesta = await fetch(`${NEWS_API_HOST}?q=${criterioBusqueda}&apiKey=${API_KEY}&page=${pagina}&pageSize=10&language=es`)
        return respuesta.json();
    } catch (error) {
        return { isError: true };
    }
};