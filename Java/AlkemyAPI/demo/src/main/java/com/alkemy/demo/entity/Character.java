package com.alkemy.demo.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="character", schema="movies")
@Data
public class Character {

    @Id
    @Column(name="character_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer characterId;
    private String image;
    private Integer age;
    private Float weight;
    private String history;
    private Integer movieId;

}
