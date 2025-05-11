package com.example.patient;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;
@Service
public class PatientSvc {
  private final PatientRepo r;
  public PatientSvc(PatientRepo r){this.r=r;}
  public Page<Patient> findAll(String q,int p,int s){return r.findByNameContaining(q, PageRequest.of(p,s));}
  public Patient get(Long id){return r.findById(id).orElseThrow();}
  public Patient save(Patient x){return r.save(x);}
  public void del(Long id){r.deleteById(id);}
}