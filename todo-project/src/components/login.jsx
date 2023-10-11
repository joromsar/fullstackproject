import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import './login.css'


export default function Login() {
  const [alignment, setAlignment] = useState("center");
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
    >
      <Card sx={{ maxWidth:300, p: 3, mx:"auto", my:20 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            align={alignment}
            gutterBottom
          >
            <strong>Welcome To-Do App</strong>
          </Typography>

          <div>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color:"action.active", mr: 1, my: 1 }} />
              <TextField
                id="username"
                label="User Name"
                variant="standard"
                type="text"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <PasswordIcon sx={{ color: "action.active", mr: 1, my: 1 }} />
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
              />
            </Box>
          </div>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Box textAlign="center">
            <Button variant="outlined" size="large" type="submit">
              Login
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
