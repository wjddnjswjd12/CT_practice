const vocabMap = {};

const input = "mississipi";
let MaxChar = "";
let count = 0;

for (let char of input.toUpperCase()) {
  vocabMap[char] = vocabMap[char] ? vocabMap[char] + 1 : 1;
}
const arr = Object.values(vocabMap);
const temp = [...arr].sort((a, b) => b - a)[0];
const maxIndex = arr.indexOf(temp);
MaxChar = vocabMap[maxIndex];
for (let i in arr) {
  if (arr[i] === temp) count++;
}

if (count > 1) console.log("?");
else console.log(Object.keys(vocabMap)[maxIndex]);
