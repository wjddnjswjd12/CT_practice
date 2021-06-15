function solution(new_id) {
  let lowerId = new_id.toLowerCase();
  let exp = lowerId
    .replace(/[^\w-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .split("");

  let frontBack = checkDot(exp);
  if (!frontBack.length) frontBack.push("a");
  let spliced = frontBack.length >= 16 ? frontBack.splice(0, 15) : frontBack;
  let lastDotCheck = checkDot(spliced);
  while (lastDotCheck.length < 3) {
    lastDotCheck.push(lastDotCheck[lastDotCheck.length - 1]);
  }

  return lastDotCheck.join("");
}

function checkDot(exp) {
  if (exp[0] === ".") exp.shift();
  if (exp[exp.length - 1] === ".") exp.pop();
  return exp;
}
