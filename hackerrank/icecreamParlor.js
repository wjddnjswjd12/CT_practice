
function icecreamParlor(m, arr) {
    const iceCreanObject = new Map();
    const answer = [];
    for(let i = 0; i < arr.length; i++){
        const subtract = m - arr[i];
        
        if(iceCreanObject.has(subtract)){
            answer.push(iceCreanObject.get(subtract));
            answer.push(i+1);
            break;
        }else{
            iceCreanObject.set(arr[i],i+1);   
        }
        
           
    }
    return answer;
}
