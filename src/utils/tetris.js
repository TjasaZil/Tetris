import { lShape, zShape, oShape, tShape, iShape } from "./Tetris/shapes";
//import checkHighScore from "./Tetris/checkHighScore";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid-element");
  const gameOverText = document.querySelector("#game-over");
  let squares = Array.from(document.querySelectorAll(".grid-element div"));
  const width = 10;
  let timer;
  let count = 600;
  let score = 0;
  const colors = ["#00CCFF", "#00FFCC", "#FFFF00", "#FF00CC", "#CC00FF"];
  // let countShapes = 0;

  const scoreText = document.querySelector("#score");
  const startButton = document.querySelector("#start-button");
  const reloadButton = document.querySelector("#reload-button");
  //const speed = document.querySelector("#speed");
  //let speedCounter = 1;

  reloadButton.classList.add("hide-reload");
  //* SHAPES
  const shapes = [lShape, zShape, oShape, tShape, iShape];

  //* RANDOMLY SELECT THE SHAPE AND STARTING POSITION
  let startingPosition = Math.floor(Math.random() * 8);
  if (startingPosition === 0 || startingPosition === 1) {
    startingPosition += 1;
  }
  let randomShape = Math.floor(Math.random() * 5);

  let randomRotation = Math.floor(Math.random() * 4);
  if (randomShape === 5) {
    randomRotation === 1;
  }

  let currentShape = shapes[randomShape][randomRotation];

  //? draw the shape
  let draw = () => {
    currentShape.forEach((index) => {
      squares[startingPosition + index].classList.add("shape-styling");
      squares[startingPosition + index].style.backgroundColor =
        colors[randomShape];
    });
  };

  //? undrawing/removing the shape when the user is rotating it
  let undraw = () => {
    currentShape.forEach((index) => {
      squares[startingPosition + index].classList.remove("shape-styling");
      squares[startingPosition + index].style.backgroundColor = "";
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
      moveDown();
    }
  };
  document.addEventListener("keyup", controls);

  //? assign controls to the arrow buttons in the document
  const upButton = document.querySelector("#up-button");
  const leftButton = document.querySelector("#left-button");
  const bottomButton = document.querySelector("#bottom-button");
  const rightButton = document.querySelector("#right-button");

  bottomButton.disabled = true;
  upButton.disabled = true;
  leftButton.disabled = true;
  rightButton.disabled = true;

  upButton.addEventListener("click", () => {
    rotateShape();
  });
  leftButton.addEventListener("click", () => {
    moveLeft();
  });
  bottomButton.addEventListener("click", () => {
    moveDown();
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
      // countShapes++;
      //speed.innerText = speedCounter;
      //console.log(countShapes);
      randomShape = Math.floor(Math.random() * 5);
      randomRotation = Math.floor(Math.random() * 4);
      currentShape = shapes[randomShape][randomRotation];
      startingPosition = Math.floor(Math.random() * 8);
      if (startingPosition === 0 || startingPosition === 1) {
        startingPosition += 1;
      }

      draw();
      addScore();
      gameOver();
      //changeCount();
      //timer = setInterval(moveDown, count);
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

  //*FIX ROTATION OF TETROMINOS A THE EDGE
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

  function checkRotatedPosition(P) {
    P = P || startingPosition;
    if ((P + 1) % width < 4) {
      if (isAtRight()) {
        startingPosition += 1;
        checkRotatedPosition(P);
      }
    } else if (P % width > 5) {
      if (isAtLeft()) {
        startingPosition -= 1;
        checkRotatedPosition(P);
      }
    }
  }

  //! rotate the shape
  let rotateShape = () => {
    undraw();
    randomRotation++;
    if (randomRotation === currentShape.length) {
      randomRotation = 0;
    }
    currentShape = shapes[randomShape][randomRotation];
    checkRotatedPosition();
    draw();
  };

  //! adding functionality to the button
  startButton.addEventListener("click", () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
      count = 770;
      bottomButton.disabled = true;
      upButton.disabled = true;
      leftButton.disabled = true;
      rightButton.disabled = true;
    } else {
      draw();
      //changeCount();
      timer = setInterval(moveDown, count);
      bottomButton.disabled = false;
      upButton.disabled = false;
      leftButton.disabled = false;
      rightButton.disabled = false;
    }
  });

  //? add score

  let addScore = () => {
    for (let i = 0; i < 199; i = i + width) {
      const row = [
        i,
        i + 1,
        i + 2,
        i + 3,
        i + 4,
        i + 5,
        i + 6,
        i + 7,
        i + 8,
        i + 9,
      ];
      if (
        row.every((index) => squares[index].classList.contains("stop-shape"))
      ) {
        score = score + 10;
        scoreText.innerText = score;
        row.forEach((index) => {
          squares[index].classList.remove("stop-shape");
          squares[index].classList.remove("shape-styling");
          squares[index].style.backgroundColor = "";
        });
        const removeRow = squares.splice(i, width);
        squares = removeRow.concat(squares);
        squares.forEach((cell) => grid.appendChild(cell));
      }
    }
  };
  function gameOver() {
    if (
      currentShape.some((index) =>
        squares[startingPosition + index].classList.contains("stop-shape")
      )
    ) {
      gameOverText.innerText = "Game Over";
      //countShapes = 0;
      // speedCounter = 1;
      count = 1540;
      bottomButton.disabled = true;
      upButton.disabled = true;
      leftButton.disabled = true;
      rightButton.disabled = true;
      startButton.disabled = true;
      reloadButton.classList.remove("hide-reload");
      stopTimer(timer);
    }
  }

  //* reload button
  reloadButton.addEventListener("click", () => {
    location.reload();
    reloadButton.classList.add("hide-reload");
  });

  //*change timer depending on the shapes fallen
  /* let changeCount = () => {
    if (countShapes % 2 === 0) {
      count = count * 0.5;
      console.log(count);
      speedCounter++;
    }
  };*/
  let stopTimer = (timer) => {
    clearInterval(timer);
  };
});
