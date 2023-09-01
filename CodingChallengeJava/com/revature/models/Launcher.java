package com.revature.models;

import java.util.Arrays;
public class Launcher {

    public static int findLargestGap(int[] array) {

        // Sort the array
        Arrays.sort(array);

        int largestGap = 0;
        for (int i = 1; i < array.length; i++) {
            int gap = array[i] - array[i - 1];
            if (gap > largestGap) {
                largestGap = gap;
            }
        }

        return largestGap;
    }

    public static void main(String[] args) {
        //
        int[] array = {9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5};
        int largestGap = findLargestGap(array);
        System.out.println("Largest gap = " + largestGap);

    }
}
