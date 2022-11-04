document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelectorAll(".grid-element");
  let squares = Array.from(document.querySelectorAll(".grid-element div"));
  const width = 10;

  //const score = document.querySelector("#score");
  //const startButton = document.querySelector("#start-button");

  //* SHAPES
  const lShape = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];
  const zShape = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
  ];
  const oShape = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];
  const tShape = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];
  const iShape = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  const shapes = [lShape, zShape, oShape, tShape, iShape];

  //* RANDOMLY SELECT THE SHAPE AND STARTING POSITION
  //let randomInteger = Math.floor(Math.random() * shapes.length);
  let startingPosition = Math.floor(Math.random() * 9);
  let randomShape = Math.floor(Math.random() * 5);
  let randomRotation = Math.floor(Math.random() * 4);
  let currentShape = shapes[randomShape][randomRotation];

  //? draw the shape
  let draw = () => {
    currentShape.forEach((index) => {
      squares[startingPosition + index].classList.add("shape-styling");
    });
  };

  //? undrawing/removing the shape when the user is rotating it
  let undraw = () => {
    currentShape.forEach((index) => {
      squares[startingPosition + index].classList.remove("shape-styling");
    });
  };
  //?assign functions to keyCodes so the user can control the shapes

  let controls = (e) => {
    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      // rotateShape();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      //faster down
    }
  };
  document.addEventListener("keyup", controls);

  //? make the shape move down every interval

  let moveDown = () => {
    undraw();
    startingPosition = startingPosition + width;
    draw();
    stopShape();
  };
  let timer = setInterval(moveDown, 1000);

  //? write a function to stop the shape from going below the grid

  let stopShape = () => {
    if (
      currentShape.some((index) =>
        squares[startingPosition + index + width].classList.contains(
          "stop-shape"
        )
      )
    ) {
      currentShape.forEach((index) =>
        squares[startingPosition + index].classList.add("stop-shape")
      );

      //? after the current shape stops it is time for the new shape to start falling
      /* let chooseShape = Math.floor(Math.random() * shapes.length);
      currentShape = shapes[chooseShape][chooseShape];*/
      /* randomInteger = Math.floor(Math.random() * shapes.length);
      currentShape = shapes[randomInteger][randomInteger];
      currentShape =
        shapes[Math.floor(Math.random() * 5)][Math.floor(Math.random() * 4)];*/

      randomShape = Math.floor(Math.random() * 5);
      randomRotation = Math.floor(Math.random() * 4);
      currentShape = shapes[randomShape][randomRotation];
      startingPosition = Math.floor(Math.random() * 9);
      draw();
    }
  };
  let moveLeft = () => {
    undraw();
    const isAtLeftEdge = currentShape.some(
      (index) => (startingPosition + index) % width === 0
    );
    if (!isAtLeftEdge) {
      startingPosition = startingPosition - 1;
    }
    if (
      currentShape.some((index) =>
        squares[startingPosition + index].classList.contains("stop-shape")
      )
    ) {
      startingPosition = startingPosition + 1;
    }
    draw();
  };

  let moveRight = () => {
    undraw();
    const isAtRightEdge = currentShape.some(
      (index) => (startingPosition + index) % width === 0
    );
    if (!isAtRightEdge) {
      startingPosition = startingPosition + 1;
    }
    if (
      currentShape.some((index) =>
        squares[startingPosition + index].classList.contains("stop-shape")
      )
    ) {
      startingPosition = startingPosition - 1;
    }
    draw();
  };
  /*
  function isAtRight() {
    return currentShape.some(
      (index) => (startingPosition + index + 1) % width === 0
    );
  }

  function isAtLeft() {
    return currentShape.some(
      (index) => (startingPosition + index) % width === 0
    );
  }

  let checkPositionBeforeRotation = (position) => {
    position = position || startingPosition;
    if ((position + 1) % width < 4) {
      if (isAtRight()) {
        startingPosition = startingPosition + 1;
        checkPositionBeforeRotation(position);
      } else if (isAtLeft()) {
        startingPosition = startingPosition - 1;
        checkPositionBeforeRotation(position);
      }
    }
  };

  let rotateShape = () => {
    undraw();

    if (randomRotation < 3) {
      randomRotation = randomRotation + 1;
    } else {
      randomRotation = 0;
    }

    currentShape = shapes[randomShape][randomRotation];
    checkPositionBeforeRotation();
    draw();
  };*/

  console.log(squares);
  console.log(width);
  console.log(grid);
  console.log(shapes);
  console.log(startingPosition);
  console.log(timer);
});
