import java.util.*;

class Solution {
    public String[] solution(String my_string) {
        // 결과를 담을 리스트 생성
        List<String> list = new ArrayList<>();
        
        // i부터 끝까지의 부분 문자열을 리스트에 추가
        for (int i = 0; i < my_string.length(); i++) {
            list.add(my_string.substring(i));
        }

        // 리스트를 배열로 변환
        String[] answer = list.toArray(new String[0]);

        // 배열을 오름차순으로 정렬
        Arrays.sort(answer);

        return answer;
    }
}
