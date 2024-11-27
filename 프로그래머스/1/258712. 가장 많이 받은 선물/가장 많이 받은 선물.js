function solution(friends, gifts) {
    const len = friends.length;
    const giftCount = Array.from({ length: len }, () => Array(len).fill(0));
    const giftScore = new Map();
    const nextMonth = Array(len).fill(0);
    // 친구별 점수 초기화
    friends.forEach((friend) => giftScore.set(friend, 0));
    // 선물 기록 및 점수 계산
    for (const gift of gifts) {
        const [from, to] = gift.split(" ");
        const fromIdx = friends.indexOf(from);
        const toIdx = friends.indexOf(to);

        // 선물 주고받은 횟수 기록
        giftCount[fromIdx][toIdx]++;

        // 점수 업데이트
        giftScore.set(from, giftScore.get(from) + 1);
        giftScore.set(to, giftScore.get(to) - 1);
    }
    // 다음 달 점수 계산
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (giftCount[i][j] > giftCount[j][i]) {
                nextMonth[i]++;
            } else if (giftCount[i][j] < giftCount[j][i]) {
                nextMonth[j]++;
            } else {
                if (giftScore.get(friends[i]) > giftScore.get(friends[j])) {
                    nextMonth[i]++;
                } else if (giftScore.get(friends[i]) < giftScore.get(friends[j])) {
                    nextMonth[j]++;
                }
            }
        }
    }
    return Math.max(...nextMonth);
}
