import java.util.*;

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] answer = new int[queries.length]; // 결과 배열 생성

        for (int i = 0; i < queries.length; i++) {
            int s = queries[i][0];  // 시작 인덱스
            int e = queries[i][1];  // 끝 인덱스
            int k = queries[i][2];  // 기준값 k

            int min = Integer.MAX_VALUE;
            boolean found = false;

            // s ~ e 구간에서 k보다 큰 수 중 최소값 탐색
            for (int j = s; j <= e; j++) {
                if (arr[j] > k && arr[j] < min) {
                    min = arr[j];
                    found = true;
                }
            }

            // 결과 저장: 조건에 맞는 값이 없으면 -1, 있으면 최소값
            answer[i] = found ? min : -1;
        }

        return answer;
    }
}
