import { Typography, Box } from '@mui/material';
import './style.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer id="footer">
            <Box>
                <Typography>
                    <b>Made by Franco with &#128147; for Informatorio</b>
                </Typography>
            </Box>
            <Box id="redes">
                <a href="https://github.com/PerelliFSP" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/perellifsp/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            </Box>
            <Box>
                <Typography>
                    (2022)
                </Typography>
            </Box>
        </footer>
    );
};

export default Footer;