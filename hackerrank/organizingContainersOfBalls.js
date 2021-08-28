
function organizingContainers(containers) {
    const containerCounts = new Array(containers.length).fill(0);
    const ballTypes = new Array(containers.length).fill(0);
    
    for(let i = 0; i < containers.length; i++){
        const container = containers[i];
        for(let j = 0; j < containers.length; j++){
            const ballCount = container[j];
            containerCounts[i] += ballCount;
            ballTypes[j] += container[j];
        }
    }

    containerCounts.sort((a,b)=>a-b);
    ballTypes.sort((a,b)=>a-b);

    console.log(containerCounts, ballTypes)
    for(let i = 0; i < containers.length; i++){
        if(containerCounts[i] !== ballTypes[i]) return "Impossible";
    }
    
    return "Possible";
}

// 한개씩만 스왑 가능하다 => 컨테이너의 크기가 주어진 크기에서 변하지 않을것이다
// 타입별로 공의 개수가 몇갠지 알아야한다. 만약 컨테이너 크기가 각각 2개야
// 근데 나에게 빨간공 3개 초록공 1개있으면  빨간공 한개는 무조건 어디에도 넣을 수 없잖음
// swap을 꼭 물물교환하듯 하나씩만 해야하니까
