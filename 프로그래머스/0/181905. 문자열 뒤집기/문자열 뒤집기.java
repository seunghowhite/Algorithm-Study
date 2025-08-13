class Solution {
    public String solution(String my_string, int s, int e) {
        // 1. 문자열을 문자 배열로 변환
        char[] arr = my_string.toCharArray();
        
        // 2. s~e 구간을 뒤집기
        while (s < e) {
            char temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }
        
        // 3. 문자 배열을 다시 문자열로 변환
        return new String(arr);
    }
}
