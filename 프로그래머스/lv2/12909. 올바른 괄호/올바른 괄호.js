function solution(s){
    let stackCount = 0;
    for (let i = 0; i < s.length; i++) {
        stackCount += s[i] === '(' ? 1 : -1;
        if (stackCount < 0) return false;
    }
    return stackCount === 0 ? true : false;
}

// 스택을 생각하시면 간단하게 푸실 수 있으리라 생각됩니다.

 

// 스택처럼 사용할 변수 stackCount를 하나 만들고,

// 문자열 s를 반복문을 돌려서

// '(' 문자일 때는 stackCount에 1을 더해주고,

// ')' 문자일 때는 stackCount에 1을 빼주는 과정을 거칩니다.

// 그러던 와중 '(' 가 먼저 나온 것이 없는데 ')' 이 나왔다면 stackCount가 -1 이 될것이므로

// 올바른 괄호가 아니기 때문에 false를 반환합니다.

// 반복문이 모두 끝나면 stackCount가 0보다 크다면 ')' 가 더 남아있다는 말과 같으므로

// stackCount가 0일 때 true를 반환하고, 그렇지 않을때는 false를 반환하여 문제를 해결할 수 있습니다.