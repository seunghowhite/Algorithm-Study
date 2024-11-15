//2024-11-15
function solution(wallpaper) {
    // answer 배열 초기화: 첫 `#`를 찾기 전에는 기본값 유지
    let answer = [wallpaper.length, wallpaper[0].length, 0, 0];
    let isFirstFound = false; // 첫 번째 `#`가 발견되었는지 여부를 추적

    wallpaper.forEach((map, rowIndex) => {
        const row = map.split("");
        const first = row.indexOf("#");
        const last = row.lastIndexOf("#");

        // `#` 문자가 있는지 확인
        if (first !== -1) {
            if (!isFirstFound) {
                // 첫 번째 `#` 발견 시 초기 위치로 설정
                answer[0] = rowIndex;
                answer[1] = first;
                answer[2] = rowIndex + 1;
                answer[3] = last + 1;
                isFirstFound = true;
            } else {
                // 두 번째 이후부터는 현재 값과 비교하여 갱신
                answer[0] = Math.min(answer[0], rowIndex);     // 위쪽 위치 갱신
                answer[1] = Math.min(answer[1], first);        // 왼쪽 위치 갱신
                answer[2] = Math.max(answer[2], rowIndex + 1); // 아래쪽 위치 갱신
                answer[3] = Math.max(answer[3], last + 1);     // 오른쪽 위치 갱신
            }
        }
    });

    // answer 배열을 반환
    return answer;
}