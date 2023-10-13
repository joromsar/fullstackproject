import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import WarningIcon from '@mui/icons-material/Warning';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import './manage_tasks.css'


export default function ManageTasks() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tasks, setTasks] = React.useState();
  
  
  React.useEffect(() => {
    axios.get('http://localhost:3000/api/v1/tasks')
      .then((res) => {
        setTasks(res.data.tasks)

      })
  })

  const handleDeleteTask = (id) => {
    axios.delete(`http://localhost:3000/api/v1/tasks/${id}`,
      { ...tasks })
      .then(res => {
        navigate('/dashboard')
      })

  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'primary.main',
    color:'#ffffff',
    boxShadow: 24,
    p: 4,
  };

  return (
    <TableContainer sx={{ minWidth: 'auto', mx: 'auto', my: 5 }} component={Paper}>
      <Table sx={{ minWidth: 'auto' }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ "& th": { color: "#ffffff", backgroundColor: "#0E59FD" } }}>
            <TableCell>Task Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="center">Target Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks?.map((task) => (
            <TableRow
              key={task._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {task.title}
              </TableCell>
              <TableCell align="left">{task.description}</TableCell>
              <TableCell align="center">{Intl.DateTimeFormat('en-US').format(new Date(task.targetdate))}</TableCell>
              <TableCell align="center">{task.completed ? <Tooltip title="Task 100% Completed"><DoneOutlineOutlinedIcon sx={{ color: "#06D6B6" }} /></Tooltip> : <Tooltip title="Pending Task"><PendingActionsOutlinedIcon sx={{ color: "#FD2B0E" }} /></Tooltip>}</TableCell>
              <TableCell align="center"><a href={`/edit-task/${task._id}`}><Tooltip title="Edit Task"><ModeEditIcon /></Tooltip></a><a className="delete" onClick={handleOpen}><Tooltip title="Delete Task"><DeleteIcon /></Tooltip></a></TableCell>

              <Modal
              className="modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h6">
                    <WarningIcon sx={{ color: "red" }} ></WarningIcon> Are you sure you want to delete this task: {task.title}?
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Button variant="contained" color="secondary" size="medium" onClick={() => handleDeleteTask(task._id)}>
                      Delete Task
                    </Button>
                  </Typography>
                </Box>
              </Modal>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}