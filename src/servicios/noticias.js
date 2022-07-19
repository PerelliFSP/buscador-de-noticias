import { API_KEY, NEWS_API_HOST } from "./constantes";

export const getNoticias = async (criterioBusqueda = '') => {
    try {
        const respuesta = await fetch(`${NEWS_API_HOST}?q=${criterioBusqueda}&apiKey=${API_KEY}&page=1&pageSize=10&language=es`)
        return respuesta.json();
    } catch (error) {
        return { isError: true };
    }
};