function solution(numbers) {
    let answer = '';
    answer=numbers.map((num)=>num+"").sort((a,b)=>(b+a)-(a+b)).join('');
    return answer.replace(/^0+/, "0");
}