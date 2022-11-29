import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "./components/Header";
import { Button, Container, IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

function App() {
    return (
        <>
            <Header />
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <IconButton color="primary">
                        <LoginIcon />
                    </IconButton>
                </Box>
            </Container>
        </>
    );
}

export default App;
