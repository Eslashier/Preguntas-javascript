package com.example.HardwareStore.collection;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection="product")
public class Product {

    @Id
    private String id;
    private String productName;
    private Double productPrice;
    private String productDescription;
    private Integer minUnits;
    private Integer maxUnits;
    private Integer availableUnits;
    private List<Provider> providers;
}
