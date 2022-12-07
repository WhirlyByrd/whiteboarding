/*
1. create levelArr = [0]
2. create children = []
2. create let sum = 0
3. create let level = 1
4. iterate through level while levels length !== 0
5. if level.length !== 0 then pop or dequeue and push into levelArr and into children
6. level++ to go up(or down) a level
7. when level.length === 0 
      7.A  .reduce the level array
      7.B level array int * level 
      7.C add int to sum variable
      7.B go to next level 
7. recursive process repeats
8. until final level is empty, no more levels to go
9. return sum

//1. create levelArr = [0]
2. create seen = []
2. create let sum = 0
3. create let level = 1
4. iterate through level while levels length !== 0
5. if level.length !== 0 then pop or dequeue and push into levelArr and into seen
6. level++ to go up(or down) a level
7. when level.length === 0 
      7.A  .reduce the level array
      7.B level array int * level 
      7.C add int to sum variable
      7.B go to next level 
7. recursive process repeats
8. until final level is empty, no more levels to go
9. return sum

arr1 = [1,1,1,1] = 4 * 1 = 4
arr2 = [2] = 2 * 2 = 4
arr3 = [3] = 3*3 = 9
total = 17

*/
let tree = [1, 1, [2, [3]], 1, 1];

const sumAll = (tree) => {
  let levelArr = tree;
  let children = [];
  let sum = 0;
  let total = 0;
  let level = 1;

  while (levelArr.length) {
    //shift for breadth first search
    child = levelArr.shift();
    console.log(levelArr);

    if (typeof child === "number") {
      sum += child;
    } else {
      for (let i = 0; i < child.length; i++) {
        children.push(child[i]);
      } 
    }
    if (!levelArr.length) {
      
      total = total + sum * level;
      sum = 0;
      level++;
      while (children.length) {
        levelArr.push(children.pop());
      }
    }
  }
  return total;
};

console.log(sumAll(tree));
