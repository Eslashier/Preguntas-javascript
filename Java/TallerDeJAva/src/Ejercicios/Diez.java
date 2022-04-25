package Ejercicios;

import java.util.Scanner;

public class Diez {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        System.out.print("Enter a phrase: ");
        String phrase = in.nextLine();
        String phrase1 = phrase.replaceAll("\\s+", "");
        System.out.println(phrase);
        System.out.println(phrase1);
    }
}
