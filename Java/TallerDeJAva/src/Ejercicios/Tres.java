package Ejercicios;

import java.util.Scanner;

public class Tres {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a radius: ");
        String r = in.nextLine();
        double radius = Double.parseDouble(r);
        double area = 3.141592653589793D * Math.pow(radius, 2.0D);
        System.out.println("The circle area is: " + area);
    }
}

