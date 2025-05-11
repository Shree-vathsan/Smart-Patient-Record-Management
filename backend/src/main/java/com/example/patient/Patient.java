package com.example.patient;
import jakarta.persistence.*;
@Entity
public class Patient {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  Long id;
  String name;
  Integer age;
  String ailment;
  public Patient(){}
  public Patient(String n,Integer a,String t){name=n;age=a;ailment=t;}
  public Long getId(){return id;}
  public String getName(){return name;}
  public void setName(String n){name=n;}
  public Integer getAge(){return age;}
  public void setAge(Integer a){age=a;}
  public String getAilment(){return ailment;}
  public void setAilment(String t){ailment=t;}
}