package com.demo.crud.controller;

import com.demo.crud.entity.Persons;
import com.demo.crud.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/persons")
public class PersonController {
    @Autowired
    PersonService personService;

    @GetMapping
    public List<Persons> listAllPersons(){
        return personService.listAllPersons();
    }
    @PostMapping
    public Persons addPersons (@RequestBody Persons persons){
        personService.addPerson(persons);
        return persons;
    }
    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable Long id){
        personService.deletePerson(id);
    }
    @PutMapping
    public Persons updatePersons(@RequestBody Persons persons){
        personService.updatePersons(persons);
        return persons;
    }
}
