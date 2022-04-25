package Ejercicios;

import java.util.Scanner;

public class Cuatro {
    public static void main(String[] args) {
        float iva = 0.21F;
        Scanner in = new Scanner(System.in);
        System.out.println("Type the price of the product: ");
        double price = in.nextDouble();
        double final_price = price + (price * iva);
        System.out.println("The final price of the product (iva included) is: $" + final_price);
    }
}
