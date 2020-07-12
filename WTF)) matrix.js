const rops = {value: 1500, weight: 1};
const food = {value: 2000, weight: 3};
const tent = {value: 3000, weight: 4};

const constraint = [1, 2, 3, 4];
// const constraint = 4;

const items = [rops, tent, food];

function createGrid() {
  const newGrid = [];
  for (let row = 0; row < items.length; row++) {
    newGrid[row] = [];
    for (let col = 0; col < constraint.length; col++) {
      newGrid[row][col] = 0;
    }
  }
  return newGrid;
}

function fillInGrid(grid) {
  for (const row in items) {
    for (const col in constraint) {
      const {value, weight} = items[row];
      if (grid[row - 1] === undefined) {
        grid[row][col] = value;
        continue;
      }
      const prevRowSameCol = grid[row - 1][col];
      if (weight > constraint[col]) {
        grid[row][col] = prevRowSameCol;
        continue;
      }

      console.log(constraint);
      console.log(constraint[col]);
      if (weight === constraint[col]) {
        grid[row][col] = prevRowSameCol > value ? prevRowSameCol : value;
        continue;
      }
      const diff = constraint[col - 1] - weight;
      grid[row][col] =
        prevRowSameCol > value + grid[row - 1][diff] ?
          prevRowSameCol :
          value + grid[row - 1][diff];
    }
  }
  return grid;
}

const matrix = createGrid();
console.log(matrix);
console.log(fillInGrid(matrix));
