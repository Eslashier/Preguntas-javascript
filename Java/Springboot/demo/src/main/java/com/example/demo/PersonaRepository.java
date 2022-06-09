package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;


 /* El Repository debe extender de la clase JpaRepository, la cual ya implementa
 el patron Repository
 */
public interface PersonaRepository extends JpaRepository<Persona,Integer> {
    
}
