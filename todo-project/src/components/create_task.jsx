import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const label = { inputProps: { 'aria-label': 'Task Completed?' } };

export default function Create_Task() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [task, setTask] = useState({})
    const [newTask, setNewTask] = useState({ tasks: '' })
    const [errorMessage, setErrorMessage] = useState('')
    const [checked, setChecked] = React.useState(true);

    React.useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/tasks`)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.error(error);

            });
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleCreateTask = () => {
        axios.post(`http://localhost:3000/api/v1/tasks`)
            .then(res => {
                navigate('/dashboard')
            })

    }


    return (
        <>
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
            >
                <Card sx={{ maxWidth: 400, p: 3, mx: "auto", my: 20 }} onSubmit={handleSubmit}>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            align="center"
                            gutterBottom
                        >
                            <strong>Create New Task</strong>
                        </Typography>

                        <div>
                            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                                <TextField
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    label="title"
                                    variant="standard"
                                    type="text"
                                    name="title"
                                    placeholder= "Insert the title of your task"
                                    value={newTask.title}


                                />
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                                <TextField
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    label="Description"
                                    type="text"
                                    name="description"
                                    variant="standard"
                                    placeholder="Put in a task description"
                                    value={newTask.description}
                                />
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "flex-end" }}>

                                <TextField
                                    required
                                    type="date"
                                    variant="standard"
                                    value={newTask.targetdate}

                                />
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                                <FormControlLabel label="Task Completed?"
                                    control={
                                        <Checkbox/>
                                    }
                                />

                            </Box>
                        </div>
                    </CardContent>
                    <CardActions style={{ justifyContent: "center" }}>
                        <Box textAlign="center">
                            <Button variant="outlined" size="large" type="submit">
                                New Task
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}
