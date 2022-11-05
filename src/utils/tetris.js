import { lShape, zShape, oShape, tShape, iShape } from "./Tetris/shapes";

document.addEventListener("DOMContentLoaded", () => {
  //const grid = document.querySelectorAll(".grid-element");
  let squares = Array.from(document.querySelectorAll(".grid-element div"));
  const width = 10;
  let timer;

  //const score = document.querySelector("#score");
  const startButton = document.querySelector("#start-button");

  //* SHAPES
  const shapes = [lShape, zShape, oShape, tShape, iShape];

  //* RANDOMLY SELECT THE SHAPE AND STARTING POSITION
  let startingPosition = Math.floor(Math.random() * 8);
  if (startingPosition === 0 || startingPosition === 1) {
    startingPosition += 1;
  }
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

  //?assign functions to keyCodes so the user can control the shapes with keyboard
  let controls = (e) => {
    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      rotateShape();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      //faster down
    }
  };
  document.addEventListener("keyup", controls);

  //? assign controls to the arrow buttons in the document
  const upButton = document.querySelector("#up-button");
  const leftButton = document.querySelector("#left-button");
  const bottomButton = document.querySelector("#bottom-button");
  const rightButton = document.querySelector("#right-button");

  upButton.addEventListener("click", () => {
    rotateShape();
  });
  leftButton.addEventListener("click", () => {
    moveLeft();
  });
  bottomButton.addEventListener("click", () => {
    console.log("click");
  });
  rightButton.addEventListener("click", () => {
    moveRight();
  });

  //? make the shape move down every interval
  let moveDown = () => {
    undraw();
    startingPosition = startingPosition + width;
    draw();
    stopShape();
  };
  //timer = setInterval(moveDown, 1000);

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
      randomShape = Math.floor(Math.random() * 5);
      randomRotation = Math.floor(Math.random() * 4);
      currentShape = shapes[randomShape][randomRotation];
      startingPosition = Math.floor(Math.random() * 8);
      if (startingPosition === 0 || startingPosition === 1) {
        startingPosition += 1;
      }
      draw();
    }
  };

  let moveLeft = () => {
    undraw();
    const isAtLeftEdge = currentShape.some(
      (index) => (startingPosition + index) % width === 0
    );
    if (!isAtLeftEdge) {
      startingPosition -= 1;
    }
    if (
      currentShape.some((index) =>
        squares[startingPosition + index].classList.contains("stop-shape")
      )
    ) {
      startingPosition += 1;
    }
    draw();
  };

  let moveRight = () => {
    undraw();
    const isAtRightEdge = currentShape.some(
      (index) => (startingPosition + index) % width === width - 1
    );
    if (!isAtRightEdge) {
      startingPosition += 1;
    }
    if (
      currentShape.some((index) =>
        squares[startingPosition + index].classList.contains("stop-shape")
      )
    ) {
      startingPosition -= 1;
    }
    draw();
  };

  //!rotate the shape
  let rotateShape = () => {
    undraw();
    randomRotation++;
    if (randomRotation === currentShape.length) {
      randomRotation = 0;
    }
    currentShape = shapes[randomShape][randomRotation];
    draw();
  };

  //! adding functionality to the button
  startButton.addEventListener("click", () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    } else {
      draw();
      timer = setInterval(moveDown, 1000);
    }
  });
});
