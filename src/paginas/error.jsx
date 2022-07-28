import { Container, Box, Typography, Card } from "@mui/material";
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';
import './estiloerror.css'

const Error = () => {
    return (
        <Container>
            <Card id="tarj">
                <Box id="cajita">
                    <SdCardAlertIcon sx={{ fontSize: 70 }}/>
                    <Typography variant="h5">
                        Página no encontrada. <br />
                        Por favor, ingrese una URL válida. 
                    </Typography>
                </Box>
            </Card>
        </Container>
    );
};

export default Error;