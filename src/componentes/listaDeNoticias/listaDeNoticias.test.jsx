import ListaDeNoticias from "./index";
import { render, screen, waitFor, act } from "@testing-library/react";

const LISTA_STRUB = {"status": "ok", "totalResults": 1890, "articles": [
    {"source": {"id": null,"name": "Hipertextual"}, "author": "Gabriel Erard",
    "title": "Qué es Lightning Network y por qué es crucial para que Bitcoin sea el ‘dinero del futuro’", 
    "description": "aaa", "url": "https://hipertextual.com/2022/07/que-es-lightning-network-crucial-futuro-bitcoin",
    "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/02/kanchanara-4kjjezdyo3m-unsplash-scaled.jpeg?fit=2560%2C1707&quality=50&strip=all&ssl=1",
    "publishedAt": "2022-07-15T00:01:00Z","content": "aaa"},
    {"source": {"id": null, "name": "Xataka.com"},"author": "Javier Pastor", "title": "aaa",
    "description": "aaa", "url": "https://www.xataka.com/empresas-y-economia/tesla-se-fia-bitcoin-empresa-vende-75-sus-criptos-para-minimizar-perdidas",
    "urlToImage": "https://i.blogs.es/ed08e0/captura-de-pantalla-2022-07-21-a-las-8.25.42/840_560.jpeg", "publishedAt": "2022-07-21T06:27:18Z",
    "content": "aaa"}]
    };
const stubFetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(LISTA_STRUB)
});

describe('<ListaDeNoticias />', () => {
    //Bienvenido
    //Loading
    it('Debe aparecer el spinner en la carga', async () => {
        // Arrange
        const originalFetch = global.fetch;
        global.fetch = stubFetch;
        // Act
        act(() => {
            render(<ListaDeNoticias />);/* fire events that update state */
          });        
        // Assert
        const cargando = screen.getByRole('progressbar');
        expect(cargando).toBeInTheDocument();
        global.fetch = originalFetch;
    });
    //No hay resultados

    //Hay resultados
    it('Deben aparecer listados los resultados', async () => {
        // Arrange
        const stubFetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(LISTA_STRUB)
        });        
        const originalFetch = global.fetch;
        global.fetch = stubFetch;
        //Act
        render(<ListaDeNoticias busqueda='bitcoin' />);/* fire events that update state */
        //assert
        await waitFor(() => {
            expect(screen.getByRole('listaDeNoticias')).toBeInTheDocument();
        });
        global.fetch = originalFetch;
    });
});

