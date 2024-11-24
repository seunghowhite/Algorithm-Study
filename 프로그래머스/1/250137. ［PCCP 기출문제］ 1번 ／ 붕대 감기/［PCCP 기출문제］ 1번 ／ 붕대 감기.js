function solution(bandage, health, attacks) {
    let answer = health; // 초기 체력
    let sequenceCount = 0; // 연속 회복 카운터
    const attackTime = attacks.map((i) => i[0]); // 공격 시간이 담긴 배열
    let attackInfo = [...attacks]; // 공격 정보를 복사하여 사용할 배열

    for (let i = 1; i <= attacks[attacks.length - 1][0]; i++) {
        // 공격 시간일 경우
        if (attackTime.includes(i)) {
            answer -= attackInfo[0][1]; // 체력을 공격만큼 감소
            if (answer <= 0) return -1; // 체력이 0 이하이면 -1 반환
            attackInfo.shift(); // 처리한 공격 제거
            sequenceCount = 0; // 회복 카운터 초기화
        } else {
            // 공격이 없는 경우 회복 처리
            if (answer < health) {
                sequenceCount++; // 연속 회복 카운터 증가
                answer += bandage[1]; // 기본 회복량 추가
                if (answer > health) {
                    answer = health; // 최대 체력 초과 방지
                }
                if (sequenceCount === bandage[0]) {
                    answer += bandage[2]; // 추가 회복량 적용
                    if (answer > health) {
                        answer = health; // 최대 체력 초과 방지
                    }
                    sequenceCount = 0; // 추가 회복 후 카운터 초기화
                }
            }
        }
    }

    return answer; // 최종 체력 반환
}
