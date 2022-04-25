package Ejercicios;

import java.util.Scanner;

public class Once {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a phrase: ");
        String phrase = input.nextLine();
        int vowels_number = 0;

        for(int i = 0; i < phrase.length(); ++i) {
            if (phrase.charAt(i) == 'a' || phrase.charAt(i) == 'e' || phrase.charAt(i) == 'i' || phrase.charAt(i) == 'o' || phrase.charAt(i) == 'u') {
                ++vowels_number;
            }
        }
        System.out.println("The length of the phrase is: " + phrase.length());
        System.out.println("The number of vowels in the phrase are: " + vowels_number);
    }

}
