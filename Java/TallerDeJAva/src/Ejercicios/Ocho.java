package Ejercicios;

import java.util.Scanner;

public class Ocho {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a day of the week: ");
        String day = in.nextLine();

        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                System.out.println("It's a work day!");
                break;
            case "saturday":
            case "sunday":
                System.out.println("It's not a work day!");
        }
    }
}
