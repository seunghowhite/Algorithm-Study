class Solution {
    public int solution(String my_string, String is_suffix) {
        for (int i = 0; i < my_string.length(); i++) {
            String str = my_string.substring(i); 
            if (str.equals(is_suffix)) { // 내용 비교는 equals()  ==은 문자열의 내용 비교가 아니라 참조(주소) 비교
                return 1;
            }
        }
        return 0;
    }
}
