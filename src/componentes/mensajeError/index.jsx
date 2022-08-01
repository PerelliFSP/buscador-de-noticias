import { Container, Box, Typography, Card } from "@mui/material";
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';
import './style.css';

const MensajeError = () => {
    return (
        <Container role="alert">
        <Card id="tarj">
            <Box id="cajita">
                <SdCardAlertIcon sx={{ fontSize: 70 }}/>
                <Typography variant="h5">
                    No hay noticias para mostrar. <br />
                    Por favor, intenta con otro término de búsqueda. 
                </Typography>
            </Box>
        </Card>
    </Container>
    );
};

export default MensajeError;