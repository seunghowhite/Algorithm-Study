class Solution {
    public String solution(String my_string, int[][] queries) {
        char[] arr = my_string.toCharArray();
        for(int i=0; i<queries.length; i++) {
            int[] query = queries[i];
            reverse(arr, query);
        }
        return new String(arr);
    }

    private void reverse(char[] arr, int[] query) {
        int left = query[0];
        int right = query[1];
        while(left < right) {
            char c = arr[left];
            arr[left] = arr[right];
            arr[right] = c;
            left++;
            right--;
        }
    }
}