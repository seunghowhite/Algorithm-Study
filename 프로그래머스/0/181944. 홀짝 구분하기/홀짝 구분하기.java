import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); // 입력받기 위한 Scanner 생성
        int n = sc.nextInt(); // 정수 입력받기

        // 입력된 숫자가 짝수인지 홀수인지 판단
        if (n % 2 == 0) {
            System.out.print(n + " is even"); // 짝수인 경우
        } else {
            System.out.print(n + " is odd"); // 홀수인 경우
        }

        sc.close(); // Scanner 닫기 (자원 누수 방지)
    }
}
