function makeGraph(arr) {
  const graph = new Map();

  for (let el of arr) {
    graph.set(el[0], []);
    graph.set(el[1], []);
  }
  for (let el of arr) {
    graph.get(el[0]).push(el[1]);
    graph.get(el[1]).push(el[0]);
  }
  return graph;
}

function sortScore(recommendList) {
  let sortedRecommend = new Map(
    [...recommendList].sort((a, b) => {
      if (a[1] === b[1]) {
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
      }
    })
  );
  return sortedRecommend;
}

function problem7(user, friends, visitors) {
  var answer = [];

  const friendsGraph = makeGraph(friends);
  const recommend = new Map();

  friendsGraph.forEach((val, key) => {
    if (key === user) return;
    if (val.indexOf(user) === -1) {
      friendsGraph.get(user).map((friend) => {
        if (val.includes(friend) && !recommend.has(key)) {
          recommend.set(key, 10);
        } else if (val.includes(friend) && recommend.has(key)) {
          recommend.set(key, recommend.get(key) + 10);
        }
      });
    }
  });

  for (let visitor of visitors) {
    if (!recommend.has(visitor) && !friendsGraph.get(user).includes(visitor)) {
      recommend.set(visitor, 1);
    } else if (
      recommend.has(visitor) &&
      !friendsGraph.get(user).includes(visitor)
    ) {
      recommend.set(visitor, recommend.get(visitor) + 1);
    }
  }

  let sortedRecommend = sortScore(recommend);
  sortedRecommend.forEach((val, key) => answer.push(key));

  return answer;
}

module.exports = problem7;
