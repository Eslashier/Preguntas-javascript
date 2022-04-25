package Ejercicios;

import java.util.Scanner;

public class Siete {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int x;
        do {
            System.out.print("Type a number greater than zero: ");
            x = in.nextInt();
        } while(x <= 0);

        System.out.println("Good job, " + x + " is greater than zero");
    }
}

