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

export default function Edit_Task() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [task, setTask] = useState({})
    const [newTask, setNewTask] = useState({ name: '' })
    const [errorMessage, setErrorMessage] = useState('')

    React.useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/tasks/${id}`)
            .then((res) => {
                setTask(res.data.task)
                setNewTask(res.data.task)
            })
            .catch((error) => {
                console.error(error);

            });
    }, []);

    const getHandler = () => {
        return (event) => setNewTask({ ...newTask, [name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleEditTask = (id) => {
        axios.patch(`http://localhost:3000/api/v1/tasks/${id}`)
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
                        <strong>Edit Task: {newTask.title}</strong>
                    </Typography>

                    <div>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <TextField
                                label="Title"
                                variant="outlined"
                                type="text"
                                placeholder={newTask.title}
                                
                            />
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <TextField
                                label="Description"
                                type="text"
                                variant="outlined"
                                placeholder={newTask.description}
                            />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>

                            <TextField
                                type="date"
                                variant="outlined"
                                
                            />
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Checkbox label="Task Completed?"
                               />
                        </Box>
                    </div>
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                    <Box textAlign="center">
                        <Button variant="outlined" size="large" onClick={() => handleEditTask(id)}>
                            Edit Task
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    </>
)
    }



