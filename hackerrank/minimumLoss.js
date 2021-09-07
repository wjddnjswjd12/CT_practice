function minimumLoss(price) {
    // Write your code here
    let smallest = Number.MAX_SAFE_INTEGER;
    const organizedPrice = price.map((v, i) => ({ year: i + 1, price: v }));

    organizedPrice.sort((a, b) => a.price - b.price);

    for (let i = 0; i < organizedPrice.length - 1; i++) {
      const temp = organizedPrice[i + 1].price - organizedPrice[i].price;

      if (organizedPrice[i + 1].year < organizedPrice[i].year) {
        smallest = smallest > temp ? temp : smallest;
      }
    }
    return smallest;
  }


/*

문제 요구사항: 전년도에 사고 해당 년도 이후 아무때나 파는데 가장 손해가 적은 경우를 골라야하는 문제 

1트 틀림(Timeout) 2트 맞음
틀린 이유: sort할 생각 없이 무식하게 이중 포문으로 탐색함

알고리즘:
price 배열을 year, price로 매핑한 organizedPrice 배열을 생성
organizedPrice를 price가 작은 순으로 sort (오름차순)
sort하는 이유는 결국 price가 제일 낮은순부터 순차적으로 나열해야 loss가 가장 작은 경우를 따로 따져볼 필요가 없어짐
무조건적으로 i, i+1의 price를 비교할 때 organizedPrice[i + 1].price - organizedPrice[i].price 가 양수가 되며, 나올 수 있는 loss에 해당.
전년도에 사고 해당 년도 이후에 팔아야 하니까 판 날짜year[i]이 산 날짜year[i+1]보다 큰지 확인
*/
