
function getNode(map, label) {
    if (map.has(label)) {
        return map.get(label);
    } else {
        let node = {
            label: label,
            connects: new Set()
        }
        map.set(label, node);
        return node;
    }
}

function cutTheTree(data, edges) {
    let map = new Map();
    let total = 0;
    for (let i = 1; i <= data.length; i++) {
        let node = getNode(map, i);
        node.data = data[i - 1];
        total += data[i - 1];
    }
    for (let i = 0; i < edges.length; i++) {
        let from = getNode(map, edges[i][0]);
        let to = getNode(map, edges[i][1]);
        from.connects.add(to);
        to.connects.add(from);
    }    
    let root = getNode(map, 1);
    let stack = [root];
    let minDiff = Number.MAX_SAFE_INTEGER;    
    while (stack.length > 0) {
        let node = stack.pop();
        if (!node.visited) {
            let children = Array.from(node.connects.values()).filter((n) => { return !n.visited; });
            node.visited = true;
            stack.push(node);
            children.forEach((c) => {
                stack.push(c);
            });
        } else if (stack.length > 0) {
            minDiff = Math.min(Math.abs((total - node.data) - node.data), minDiff);
            let i = stack.length - 1;
            console.log(minDiff);
            while (i > 0 && !stack[i].visited) {
                i--;
            }
            console.log(stack);
            stack[i].data += node.data;
        }
    }

    return minDiff;    
   
}

/*
진심 사악한 문제
문제 요구사항:
방향성 없는 Tree에 1~n노드들이 edges로 연결되어있음.
각 노드들은 value를 가지고 있음
edge가 한번 잘리면 tree 두개가 생성됨. 
이때 각 edge들을 잘랐을때 생성되는 두개의 tree의 차의 잘대값을 구하고, 가장 작은 값을 return

일단 dfs로 풀었다. 처음엔 막무가내로 탐색해서 하나씩 더해보려했는데, 그게 아니라 미리 tree전체의 합 = total을 구해야한다
total을 구하고 dfs로 맨 아래 노드까지 stack에 넣은 상태라면,
노드 하나씩 빼면서 total - node - node의 absolute를 구했다.

total - node  잘린 edge에 달린 노드를 제외한 값 /     node 잘린 edge에 달린 node
둘의 차이를 구하면 되는것.

그대신 맨 아래 노드까지 도달한 후 다음 edge 커팅 대상에 포함될 node의 값에 현재 탐색중인 노드를 더해줌.
그래야지 아래것까지 잘린 총 누적 노드들의 합을 자연스럽게 구할 수 있다.   

*/