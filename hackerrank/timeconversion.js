function timeConversion(s) {
  let input = s.slice(0, 8).split(":");
  if (s.indexOf("PM") !== -1) {
    input[0] !== "12" ? (input[0] = Number(input[0]) + 12) : (input[0] = "12");
  } else if (s.indexOf("AM") !== -1) {
    input[0] === "12" ? (input[0] = "00") : "";
  }
  return input.join(":");
}
