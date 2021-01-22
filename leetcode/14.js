var longestCommonPrefix = function (strs) {
  let string = "";
  if (!strs.length) return string;

  for (let i = 0; i < strs[0].length; i++) {
    const letter = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== letter) return string;
    }
    string += letter;
  }

  return string;
};
