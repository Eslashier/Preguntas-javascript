package Ejercicios;

import java.util.Scanner;

public class Dos {

    int x;
    int y;
    String answer1 = "The numbers are equals";
    String answer2 = "X is greater than Y";
    String answer3 = "Y is greater than X";

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        System.out.println("Type the first number: ");
        int x = in.nextInt();
        Scanner in1 = new Scanner(System.in);
        System.out.println("Type the second number: ");
        int y = in1.nextInt();
        if (x == y) {
            System.out.println("The numbers are equals");
        } else if (x > y) {
            System.out.println("X is greater than Y");
        } else if (y > x) {
            System.out.println("Y is greater than X");
        }
    }
}

