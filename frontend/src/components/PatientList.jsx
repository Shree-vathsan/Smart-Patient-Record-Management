import {useState,useEffect} from "react";
import api from "../api";
import {Box,Table,TableHead,TableRow,TableCell,TableBody,IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function PatientList({onEdit}) {
  const [pts,setPts]=useState([]);
  useEffect(()=>{api.get().then(r=>setPts(r.data.content))},[]);
  const rm=id=>api.delete(`/${id}`).then(_=>setPts(pts.filter(x=>x.id!==id)));
  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell><TableCell>Age</TableCell><TableCell>Ailment</TableCell><TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pts.map(x=>(
            <TableRow key={x.id}>
              <TableCell>{x.name}</TableCell>
              <TableCell>{x.age}</TableCell>
              <TableCell>{x.ailment}</TableCell>
              <TableCell>
                <IconButton onClick={()=>onEdit(x)}><EditIcon/></IconButton>
                <IconButton onClick={()=>rm(x.id)}><DeleteIcon/></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}