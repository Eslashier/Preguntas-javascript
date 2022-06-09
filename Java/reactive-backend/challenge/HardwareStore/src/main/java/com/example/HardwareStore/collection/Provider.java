package com.example.HardwareStore.collection;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "provider")
public class Provider {

    @Id
    private String id;
    private String providerName;
    private String email;
    private String passport;
}
