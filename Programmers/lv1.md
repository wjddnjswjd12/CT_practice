#### lv1. 자연수 뒤집어 배열로 만들기

split을 숫자에 쓸 수없으니 String(n)을 통해 문자열로 바꾼뒤 배열로 나눠줬다.

그 후 reverse()함수로 뒤집고 answer에 하나씩 parseInt처리 해서 push했다

아쉬웠던건, 그냥 map 함수를 썼으면 더 간결햇을텐데...예를들면

```
return n.toStirng().split("").reverse().map(v=>parseInt(v));
```

다른분은 문자열로 처리하지않고 숫자로 처리하는 로직을 구현하셨다. 너무 신기해서 가져와봤다

```
function solution(n){
    var arr=[];
    do {
        arr.push(n%10);
        n=Math.floor(n/10);
    } while (n>0);
    return arr;
}
```

Math.floor을 통해 12345/10 = 1234.5 니까 1234를 n에다가 넣는 이런 과정을 while문으로 반복처리 해준다.
