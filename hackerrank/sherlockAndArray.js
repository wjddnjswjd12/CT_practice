// 이전 코드:
function balancedSums(arr) {
    // Write your code here
    if(arr.length === 1) return 'YES'
    let index = 0;

    for (let i = 0; i < arr.length; i++){
        let leftSum = arr.slice(0, index).reduce((curr,acc)=> curr + acc,0);
        let rightSum = arr.slice(index + 1, arr.lnegth).reduce((curr,acc)=> curr + acc,0);
        if(leftSum === rightSum) return 'YES';
        index++;
    }
    return 'NO'

}



// 수정 코드:
function balancedSums(arr) {
    // Write your code here
    if(arr.length === 1) return 'YES'
    let leftSum = 0;
    let rightSum = 0;

    const totalSum = arr.reduce((acc,curr)=>acc+curr,0);

    for (let i = 0; i< arr.length; i++){
        if(i!==0){
            leftSum += arr[i-1];
        }
        rightSum = totalSum - arr[i] - leftSum;
        
        if(rightSum === leftSum) return 'YES';
        
    }
    return 'NO'

}

/*
문제 요구사항: 배열에서 하나의 기준점을 고르고 기준점 (왼쪽합 === 오른쪽합)인 경우가 있으면 'YES' 아니면 'NO'를 반환하는 문제

알고리즘: 
단순하게 left배열 합 right배열 합 구하면 되는거 아닌가 했는데 
풀면서도 생각한게 이거 백퍼 timeout걸리겠다고 생각했다.
역시 Timeout이 걸렸고, totalSum을 추가해서 개선했다.
leftSum은 for문 도는 그때그때 해당 인덱스 - 1 값을 더해줬고, totalsum - 기준점 - leftSum을 하여 rightSum도 바로바로 구해줬다
leftSum과 rightSum을 비교하여 'YES'반환. for문 다 돌때까지 leftSum === rightSum인거 없으면 'NO'반환
*/
