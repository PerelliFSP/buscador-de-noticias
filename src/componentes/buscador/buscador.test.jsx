import Buscador from "./index";
import { render, screen, fireEvent } from '@testing-library/react'
import { act } from "react-dom/test-utils";

describe('<Buscador />', () => {
    it('Debe aparecer en el documento', async () =>{
        //

        //
        render(<Buscador />);
        const buscador = screen.getByRole('search');
        //
        expect(buscador).toBeInTheDocument();
    });
    it('Debe llamar a props.onBuscar', async () => {
        //
        const onBuscarMock = jest.fn();
        //
        render(<Buscador onBuscar={onBuscarMock} />);
        const buscador = screen.getByRole('search');
        const buscadorInput = screen.getByLabelText('Buscar noticias');
        const buscadorBoton = screen.getByRole('boton');

        act(() => {
            fireEvent.change(buscadorInput, { target: { value: 'prueba'}});
            fireEvent.click(buscadorBoton);
            expect(onBuscarMock).toBeCalled();
        });
        //
    });
});