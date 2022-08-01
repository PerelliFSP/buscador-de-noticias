import { 
    AppBar, 
    Toolbar, 
    Typography, 
    CssBaseline, 
    useScrollTrigger,
    Slide
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

function HideOnScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  export default function HideAppBar() {
    return (
        <>
        <CssBaseline />
        <HideOnScroll>
          <AppBar>
            <Toolbar>
                <Typography variant="h5">
                    <ArticleIcon sx={{ fontSize: 25 }}/>
                       <strong>InfoNews</strong>
                </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        </>
    );
  }