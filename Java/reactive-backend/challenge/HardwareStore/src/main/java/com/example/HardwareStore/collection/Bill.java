package com.example.HardwareStore.collection;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Data
@Document(collection="bill")
public class Bill {

    @Id
    private String id;
    private LocalDate date;
    private String clientName;
    private String sellerName;
    private List<Product> productList;
    private Integer totalSale;
}
