const Check = (word: string) => {
  word = word.toLowerCase();
  let reverse_word: string[] = word.split("").reverse();

  let alpha: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  let beta: string[] = [];

  reverse_word.forEach((el) => {
    if (alpha.indexOf(el) > -1) {
      beta.push(el);
    }
  });
  console.log(beta);

  let res = beta.join("");
  let result = beta.reverse().join("");

  if (res === result) {
    return true;
  } else {
    return false;
  }
};

console.log(Check("11234"));
