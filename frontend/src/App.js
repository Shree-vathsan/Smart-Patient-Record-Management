import {useState} from "react";
import PatientList from "./components/PatientList";
import PatientForm from "./components/PatientForm";
import {Container,Typography} from "@mui/material";

export default function App(){
  const [sel,setSel]=useState(null);
  return (
    <Container>
      <Typography variant="h4" sx={{my:2}}>Patient Records</Typography>
      <PatientForm sel={sel&&sel.id?sel:null} onDone={()=>setSel(null)}/>
      <PatientList onEdit={p=>setSel(p)}/>
    </Container>
  );
}