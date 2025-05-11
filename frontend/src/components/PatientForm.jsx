import React from 'react';
import {useState,useEffect} from "react";
import api from "../api";


import {Box,TextField,Button} from "@mui/material";

export default function PatientForm({sel,onDone}) {
  const [pt,setPt]=useState({name:"",age:"",ailment:""});
  useEffect(()=>{if(sel)setPt(sel)},[sel]);
  const sub=e=>{e.preventDefault();(sel?api.put(`/`+pt.id,pt):api.post("",pt)).then(_=>{setPt({name:"",age:"",ailment:""});onDone();});};
  return (
    <Box component="form" onSubmit={sub} sx={{mb:2}}>
      <TextField label="Name" value={pt.name} onChange={e=>setPt({...pt,name:e.target.value})} sx={{mr:1}}/>
      <TextField label="Age" type="number" value={pt.age} onChange={e=>setPt({...pt,age:+e.target.value})} sx={{mr:1}}/>
      <TextField label="Ailment" value={pt.ailment} onChange={e=>setPt({...pt,ailment:e.target.value})} sx={{mr:1}}/>
      <Button type="submit" variant="contained">{sel?"Update":"Add"}</Button>
    </Box>
  );
}