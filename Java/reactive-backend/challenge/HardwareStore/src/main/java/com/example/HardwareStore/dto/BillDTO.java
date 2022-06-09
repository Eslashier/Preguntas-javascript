package com.example.HardwareStore.dto;

import com.example.HardwareStore.collection.Product;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection="bill")
public class BillDTO {

    private String id;
    private String clientName;
    private String sellerName;
    private List<Product> productList;
    private Integer totalSale;
}

