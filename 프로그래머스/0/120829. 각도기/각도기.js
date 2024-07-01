// 2024-07-01
function solution(angle) {
    if (angle < 90 ) {
        return 1
    }
    else if (angle == 90) {
        return 2
    }
    else if ( 180 == angle ) {
        return 4
    }
    else if (90 < angle < 180 ) {
        return 3
    }
}