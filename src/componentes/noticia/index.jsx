import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { DateTime } from "luxon";
import './tarjeta.css'
const Noticia = ({ title, content, url, urlToImage, source, publishedAt }) => {

    //"2022-07-27T00:08:28Z"
    const fechaNoticia = DateTime.fromISO(publishedAt);
    const fechaAMostrar = fechaNoticia.toFormat("DD '-' HH':'MM ' '' hs'");
    
    return (
        <Card id="tarjeta">
            <Box id="caja-imagen"> 
                <CardMedia
                    component="img"
                    height="100"
                    image={urlToImage}
                    alt="imagen de noticia"
                    id="imagen"
                />
            </Box>

            <Box id="texto"> 
                <CardContent id="CardContent">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {source.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    <a href={url}> {url} </a>
                </Typography>
                <Typography variant="body2">
                    {content}
                    <br />
                    {fechaAMostrar}
                </Typography>
                
                </CardContent>
            </Box>
        
      </Card>
    );
}
export default Noticia;