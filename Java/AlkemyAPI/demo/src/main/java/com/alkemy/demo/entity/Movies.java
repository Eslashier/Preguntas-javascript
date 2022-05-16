package com.alkemy.demo.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="Movie", schema="movie_chall")
@Data
public class Movies {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String movie_title;
    private LocalDateTime movie_date;
    private Integer movie_score;
    private String movie_image;
    private Integer movie_id;

}
