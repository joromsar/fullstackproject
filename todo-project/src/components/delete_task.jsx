import React from "react";
import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';


import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const label = { inputProps: { 'aria-label': 'Task Completed?' } };

export default function Delete_Task() {
   
    const navigate = useNavigate()
    const { id } = useParams();
    const [task, setTask] = useState({})
    const [newTask, setNewTask] = useState({ tasks: '' })
    const [errorMessage, setErrorMessage] = useState('')
    const [checked, setChecked] = React.useState(true);

    


    const handleDeleteTask = (id) => {

        axios.delete(`http://localhost:3000/api/v1/tasks/${id}`,
            { ...newTask })
            .then(res => {
                navigate('/dashboard')
            })

    }


    return (
        <>


           


        </>
    )
}