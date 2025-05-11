package com.example.patient;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.*;
@RestController
@RequestMapping("/api/patients")
public class PatientCtl {
  private final PatientSvc s;
  public PatientCtl(PatientSvc s){this.s=s;}
  @GetMapping
  public Page<Patient> all(@RequestParam(defaultValue="") String q,@RequestParam(defaultValue="0") int p,@RequestParam(defaultValue="10") int sZ){return s.findAll(q,p,sZ);}
  @GetMapping("{id}") public Patient one(@PathVariable Long id){return s.get(id);}
  @PostMapping public Patient add(@RequestBody Patient x){return s.save(x);}
  @PutMapping("{id}") public Patient upd(@PathVariable Long id,@RequestBody Patient x){Patient o=s.get(id);o.setName(x.getName());o.setAge(x.getAge());o.setAilment(x.getAilment());return s.save(o);}
  @DeleteMapping("{id}") public void del(@PathVariable Long id){s.del(id);}
}