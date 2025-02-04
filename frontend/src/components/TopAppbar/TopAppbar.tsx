import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <AppBar color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            className="size-10 rounded-full"
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
            alt="haha"
          />
          <Typography sx={{ marginLeft: 1 }}>Justin Nay</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default App;
