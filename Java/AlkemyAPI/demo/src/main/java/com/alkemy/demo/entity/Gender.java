package com.alkemy.demo.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name= "gender", schema())
public class Gender {
}
