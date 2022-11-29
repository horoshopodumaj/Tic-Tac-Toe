import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";

const Rooms = () => {
    const [rooms, setRooms] = useState(["Test 1", "Test 2"]);
    const [value, setValue] = useState("");

    const onAddRoom = (event) => {
        setValue(event.target.value);
    };

    const onClick = () => {
        if (value.length > 0) {
            setRooms([...rooms, value]);
            setValue("");
        } else {
            return;
        }
        console.log(rooms);
    };

    return (
        <Grid alignItems="center" container sx={{ height: "100%" }}>
            <Grid item xs={6} sx={{ p: 2, alignSelf: "flex-start" }}>
                <Typography align="center" variant="h6" component="h6">
                    Свободные игровые комнаты
                </Typography>
                {rooms.map((room) => {
                    return (
                        <Link>
                            <Button sx={{ display: "block" }}>{room}</Button>
                        </Link>
                    );
                })}
            </Grid>
            <Grid xs={6} item sx={{ p: 2 }}>
                <FormControl
                    sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <TextField
                        value={value}
                        onChange={onAddRoom}
                        label="Enter a name of a room"></TextField>
                    <Button onClick={onClick}>Add room</Button>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default Rooms;
