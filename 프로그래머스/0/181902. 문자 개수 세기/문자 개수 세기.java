class Solution {
    public int[] solution(String my_string) {
        int[] answer = new int[52];  
        // 알파벳 개수를 세기 위한 배열 (A~Z: 26개, a~z: 26개 → 총 52개)

        for(int i = 0; i < my_string.length(); i++){  
            // 문자열 my_string의 길이만큼 반복
            char c = my_string.charAt(i);  
            // 문자열에서 i번째 문자를 가져옴

            if(c >= 'a')  
                // 문자가 'a' 이상이면 (즉, 소문자일 경우)
                answer[c - 'a' + 26]++;  
                // 'a'를 기준으로 0부터 시작하는 인덱스를 구한 뒤
                // 대문자 공간(0~25)을 건너뛰고 소문자 공간(26~51)에 개수를 더함
            else
                // 문자가 대문자일 경우
                answer[c - 'A']++;  
                // 'A'를 기준으로 0부터 시작하는 인덱스를 구하고
                // 해당 위치에 개수를 더함
        }

        return answer;  
        // 알파벳 빈도 배열을 반환
    }
}
