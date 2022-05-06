package com.example.exampledemo.repository;

import com.example.exampledemo.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
