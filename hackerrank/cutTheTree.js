
/*


2시간 고민하다가 도저히 모르겠어서 + 답지도 없어서 내일 다시 고민해보기


*/

function cutTheTree(data, edges) {
    // Write your code here
    
    const visited = {};
    
    const graphList = [];
    let scope = 1;
    
    for (let i=0; i<edges.length; i++){
        const slicedArray = edges.slice(i+1,edges.length)
        graphList.push(generateGraph(slicedArray, edges.length))
    }
       
    const dfs = (graph, node, visited, scope) => {
        visited[scope].push(node);
        
        Object.values(graph).forEach((node)=>{
            if(!visited[scope].includes(node)){
                dfs(graph, node, visited, scope);
            }
        });
    };
    


    for(let i = 0; i<graphList.length; i++){
     
        visited[i+1] = new Array();
        
        if(!visited[i+1].includes(i+1)){ 
            console.log(visited[i+1].includes(i+1),visited, i+1)
            dfs(graphList[i], i+1, visited, scope);
            scope++;
        }
       
    }
  
    
}

   
   


function generateGraph(edges, originalLength){
    const graph = {};
    
    for(let i = 0; i< originalLength + 1; i++){
        graph[i+1]=new Array();
    }
    for(const [start, end] of edges){
        graph[start].push(end);
        graph[end].push(start); 
    }
    return graph;
}
