import React from "react";
import { Link, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
                    TaskS
                </Typography>
                <Link underline="none" sx={{ color: "primary.contrastText", cursor: "pointer" }}>
                    {" "}
                    Log out
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
