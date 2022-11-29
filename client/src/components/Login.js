import React from "react";
import { Container, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <Link to="/rooms">
                    <IconButton color="primary">
                        <LoginIcon />
                    </IconButton>
                </Link>
            </Box>
        </Container>
    );
};
export default Login;
