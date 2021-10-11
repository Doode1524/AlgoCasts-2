var lengthOfLastWord = function (s) {
  let s2 = s.trim().split(" ");
  return s2[s2.length - 1].length;
};

let s = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(s));
