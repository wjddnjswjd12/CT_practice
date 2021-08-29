function solution(scores) {
    var answer = '';
   

    for(let grader = 0; grader < scores.length; grader++){
        const selfScore=scores[grader][grader];
        let graderCount=scores.length; // 줄어들 숫자
        let totalSum = 0;
        
        let min = 101;
        let max = -1;
        let flag = true; // 자신이 평가한 점수가 최소 or 최저
        
        for(let student=0; student< scores.length; student ++){
            const gradingScore=scores[student][grader];
            
            if(student !== grader && gradingScore===selfScore){
                flag=false;
            }
            
            min = Math.min(min,gradingScore);
            max = Math.max(max, gradingScore);
            
            totalSum += gradingScore;
            
        }
        
        if(flag && (min === selfScore || max === selfScore)){
            graderCount --;
            totalSum -= selfScore;
        }
      
        answer += calculateRank(totalSum/graderCount);
    }
    
    function calculateRank(score){
        if(score >= 90)
            return "A";
        else if(score >= 80)
            return "B";
        else if(score >= 70)
            return "C";
        else if(score >= 50)
            return "D";
        else
            return "F";
    }
    
    return answer;
}
