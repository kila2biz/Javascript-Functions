//Testing final commit

function seed() {
let myArr = [];
for (i = 0; i < arguments.length; i++) {
  myArr.push(arguments[i]);
}
return myArr;
};
let argsList = seed('One', 'Two', 'Three');
console.log(argsList);

function same([x, y], [j, k]) {
if ([x, y] === [j, k]) {
  return true;
}
console.log(same([4, 2], [0, 0]));
};

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
let liveCellArray = [[3, 4], [4, 4]];
if (cell.includes(liveCellArray)) {
  return this.cell;
}
};

const printCell = (cell, state) => {
  let isAlive = true;
  if (cell === isAlive) {
    return '\u25A3';
  }
  else if (cell !== isAlive) {
    return '\u25A2';
  }
  contains.call(this.state);
};

const corners = (state = []) => {
  let topBotCoords = {
    topRight: [4, 2],
    bottomLeft: [1, 1]
  };
  let cornerCoords = [[1, 2], [4, 1]];
  if (cornerCoords[0] === topBotCoords.topRight) {
    return topBotCoords;
  }
  else if (cornerCoords[0] !== topBotCoords.topRight && topBotCoords.bottomLeft ) {
    return topBotCoords.topRight[0, 0] && topBotCoords.bottomLeft[0, 0];
  }
};

const printCells = (state, [cells]) => {
cells = [corners.topRight, corners.bottomLeft];
cells.forEach(element => {
  return printCell();
});
};

const getNeighborsOf = ([x, y]) => {
  cell = [2, 2];
  const neighborCells = [[1, 1], [2, 1], [3, 1], [1, 2], [3, 2], [1, 3], [2, 3], [3, 3]];
  if (cell === true) {
    return neighborCells;
  }
};

const getLivingNeighbors = (cell, state) => {
  const livingCells = [cell];
  contains();
  contains.bind(this.contains);
};

const willBeAlive = (cell, state) => {
  const isAlive = true;
  if (cell === getLivingNeighbors() || cell === isAlive && getLivingNeighbors()) {
    return isAlive;
  }
  
  getLivingNeighbors();
  contains(call.state) = this.contains.contains();

};

const calculateNext = (state) => {
corners();
for (let element of state) {
if (bottomLeft === [2, 2] && topRight === [4, 4]) {
  return state; 
}
}
willBeAlive();
};

const iterate = (state, iterations) => {
  let livingCells = [state];
for (let element of iterations) {
  return livingCells.Math.floor(Math.random() * 4 + 2);
}
  calculateNext();
};

const main = (pattern, iterations) => {
  const futureState = Math.floor(Math.random() * 3);
  console.log(futureState);
  console.log(main(startPatterns), 2);
};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;