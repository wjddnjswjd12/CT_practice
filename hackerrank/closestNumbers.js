function closestNumbers(arr) {
    arr.sort((a,b)=>a-b);
    let smallest=arr[1]-arr[0];
    // 차이를 계속해서 제일 작은 아이로 갱신해야 하기 때문에 지정해두기
    // 어짜피 둘의 차이가 제일 작다면 저 둘이 numList에 들어가게 되니까 arr[1]-arr[0]을 smallest에 지정해두어도 됨
    let numList=[];
    // 가장 작은 absolute 값의 차를 가진 두 수의 조합이 들어갈 array
    for(let i=0; i<arr.length-1; i++){
        let next=arr[i+1];
        let prev=arr[i];
        let diff=next-prev
        if(smallest>diff) smallest=diff;   
        //계속해서 smallest를 갱신
    }
    
    for(let i=0; i<arr.length-1; i++){
        if(arr[i+1]-arr[i]===smallest) numList.push(arr[i],arr[i+1]);
        // smallest가 나왔으니 이제 두 수의 차가 smallest인 숫자들 작은 수 부터 push 해주면 됨
    }

   return numList;
    
}
