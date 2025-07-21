class Solution {
    public String solution(String my_string, String overwrite_string, int s) {
        // s 전까지의 부분
        String front = my_string.substring(0, s);

        // overwrite_string 이후 부분
        String back = my_string.substring(s + overwrite_string.length());

        // 이어붙이기: 앞부분 + 덮어쓸 문자열 + 뒷부분
        return front + overwrite_string + back;
    }
}
