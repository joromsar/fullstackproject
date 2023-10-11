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
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios'
import './manage_tasks.css'


export default function ManageTasks() {
  const [tasks, setTasks] = React.useState()
  React.useEffect(() => {
    axios.get('http://localhost:3000/api/v1/tasks')
      .then((res) => {
        setTasks(res.data.tasks)

      })
  })
  return (
    <TableContainer sx={{ minWidth:'auto', mx:'auto', my:5}} component={Paper}>
      <Table sx={{ minWidth:'auto' }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{"& th": {color: "#ffffff",backgroundColor: "#0E59FD"}}}>
            <TableCell>Task Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="center">Target Date</TableCell>
            <TableCell align="center">Completed</TableCell>
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
              <TableCell align="center">{task.completed?<Tooltip title="Task 100% Completed"><DoneOutlineOutlinedIcon sx={{color:"#06D6B6"}}/></Tooltip>:<Tooltip title="Pending Task"><PendingActionsOutlinedIcon sx={{color:"#FD2B0E"}}/></Tooltip>}</TableCell>
              <TableCell align="center"><a href={`/edit-task/${task._id}`}><Tooltip title="Edit Task"><ModeEditIcon/></Tooltip></a><a class="delete" href="/delete-task"><Tooltip title="Delete Task"><DeleteIcon/></Tooltip></a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}