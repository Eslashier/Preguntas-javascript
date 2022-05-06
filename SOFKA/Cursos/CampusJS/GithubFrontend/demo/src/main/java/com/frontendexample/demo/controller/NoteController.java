package com.frontendexample.demo.controller;

import com.frontendexample.demo.entity.Note;
import com.frontendexample.demo.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "http://localhost:3000/")

public class NoteController {
    @Autowired
    private NoteService service;

    @GetMapping("get/notes")
    public List<Note> getAllNotes(){
        return service.getNotes();
    };

    @PostMapping("save/notes")
    public Note saveNote(@RequestBody Note note){
        return service.saveNote(note);
    };

    @PutMapping("update/note")
    public Note updateNote(@RequestBody Note note){
        return service.updateNote(note);
    }

    @DeleteMapping("delete/note/{id}")
    public void deleteNote(@PathVariable Long id){
        service.deleteNote(id);
    }
}
