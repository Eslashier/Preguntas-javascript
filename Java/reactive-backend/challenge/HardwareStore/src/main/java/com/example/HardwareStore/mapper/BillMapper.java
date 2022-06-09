package com.example.HardwareStore.mapper;


import com.example.HardwareStore.collection.Bill;
import com.example.HardwareStore.dto.BillDTO;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.config.EnableWebFlux;

@Component
@EnableWebFlux
public class BillMapper {

    private final ModelMapper modelMapper;

    public BillMapper(ModelMapper modelMapper){
        this.modelMapper = modelMapper;
    }

    public BillDTO fromBillToBillDTO(Bill bill) {
        return modelMapper.map(bill, BillDTO.class);
    }

    public Bill fromBillDTOToBill(BillDTO billDTO){
        return modelMapper.map(billDTO, Bill.class);
    }
}
