import MensajeError from "./index";
import { render, screen } from '@testing-library/react'

describe('<MensajeError />', () => {
    it('Debe aparecer en el documento', async () => {
        //Arrange
        //Act
        render(<MensajeError />);
        const mensaje = screen.getByRole('alert');
        //Assert
        expect(mensaje).toBeInTheDocument();
    })
});