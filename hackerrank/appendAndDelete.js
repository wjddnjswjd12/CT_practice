function appendAndDelete(s, t, k) {
    let sArr = s.split("");
    let tArr = t.split("");
    let count = 0
    for (let i = 0; i === count && i < s.length; i++) {
        //겹치는 개수 구하기
        if (sArr[i] === tArr[i]) {
            count++;
        }
    }

    let tCnt = t.length - count;
    let sCnt = s.length - count;
//안겹치는 개수 구하기

    let tsc = k - (tCnt + sCnt);

    if (tCnt + sCnt < k && t.length + s.length > k && tsc % 2 !== 0) {
        return "No";
        //개수가 맞지 않으면 no
    } else if (tCnt + sCnt <= k) {
        return "Yes";
        //맞으면 yes
    } else {
        return "No";
    }
}
