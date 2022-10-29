function checkReduplicate(username) {
  const permutation = [];
  let i = 0;

  while (i < username.length - 1) {
    for (j = i + 1; j < username.length; j++) {
      permutation.push(username.slice(i, j + 1).join(""));
    }
    i++;
  }
  return permutation;
}

function problem6(forms) {
  var answer = new Set();
  const tempList = [];
  for (let i = 0; i < forms.length; i++) {
    tempList.push(...checkReduplicate(forms[i][1].split("")));
  }

  const permutationList = new Set(tempList);
  permutationList.forEach((checkWord) => {
    let saveIndex = [];
    for (let i = 0; i < forms.length; i++) {
      if (forms[i][1] !== checkWord && forms[i][1].indexOf(checkWord) > -1) {
        saveIndex.push(i);
      }
    }
    if (saveIndex.length > 1)
      saveIndex.map((val) => {
        answer.add(forms[val][0]);
      });
  });

  answer = Array.from(answer);

  return answer.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
}

console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);

module.exports = problem6;
