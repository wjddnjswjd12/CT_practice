function bfs(n, m, edges, s) {
    // Write your code here
  let graph={};
    let visited = {};
    let reachDistance = {};
    
    for(let i = 0; i< n+1; i++){
        graph[i]=new Array();
    }

    for(let [start, end] of edges){
        graph[start].push(end);
        graph[end].push(start); //와..진짜..이거..하나때문에.....ㅋㅋ
    }
    
    const queue = [[s, 0]];
    let current;
    let distance;
    while(queue.length!==0){
        current=queue.shift();
        distance=current[1];
        
        let neighbors=graph[current[0]];
        

        neighbors.forEach(neighbor=>{

            if(!visited[neighbor]){
                queue.push([neighbor,distance+6]);
                visited[neighbor]=true;
                reachDistance[neighbor]=distance+6;
            }
        })
        
    }
    let answer = {}
    for(let i=1; i < n + 1; i++){
        if(i===s) continue;
        answer[i]=reachDistance[i] ? reachDistance[i] : -1;
    }

    return Object.values(answer);
    
}
