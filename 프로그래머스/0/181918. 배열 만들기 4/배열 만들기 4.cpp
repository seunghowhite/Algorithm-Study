#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr) {
    vector<int> stk;

    for (int i = 0; i < arr.size(); i++) {
        if (stk.empty()) {
            stk.push_back(arr[i]);
        } else if (stk.back() < arr[i]) {
            stk.push_back(arr[i]);
        } else {
            stk.pop_back();
            i--;  // 같은 arr[i]를 다시 비교하기 위해 인덱스 감소
        }
    }

    return stk;
}
