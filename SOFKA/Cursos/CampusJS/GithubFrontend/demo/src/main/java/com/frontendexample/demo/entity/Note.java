package com.frontendexample.demo.entity;

import lombok.Data;

import javax.persistence.*;


@Entity(name= "Note")
@Table(name= "note")
@Data
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType   .AUTO)
    private Long id;

    private String title;

    private String message;

    private Boolean done;

}
