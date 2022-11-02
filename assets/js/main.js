function play() {
  let lvl = document.getElementById("level").value;
  console.log("play");
  bombArray = [];
  score = 0;

  if (lvl == "easy") {
    while (bombArray.length < 16) {
      let bomb = Math.floor(Math.random() * 100) + 1;
      if (bombArray.includes(bomb) !== true) {
        bombArray.push(bomb);
      }
    }
    console.log("easy");

    // console.log("play2");
    const griglia = document.getElementById("griglia");
    // console.log(griglia);

    function createSquare(counter) {
      const div = document.createElement("div");

      div.classList.add("square100");
      div.innerHTML = `<span>${counter}</span>`;
      return div;
    }

    // console.log(createSquare());

    for (let i = 1; i <= 100; i++) {
      let currentElement = createSquare(i);
      //   console.log(currentElement);

      currentElement.addEventListener("click", function () {
        // console.log(this);
        if (bombArray.includes(i)) {
          currentElement.classList.toggle("bombz");
          document.getElementById("sadMessage").classList.add("disBlock");
          document.getElementById("sadText").classList.add("txtBlock");
          document.getElementById("userScore").innerHTML =
            "Your total score is:  " + score;
        } else {
          currentElement.classList.toggle("active");
          score += 1;
        }
      });

      griglia.append(currentElement);
    }
  } else if (lvl == "medium") {
    while (bombArray.length < 16) {
      let bomb = Math.floor(Math.random() * 81) + 1;
      if (bombArray.includes(bomb) !== true) {
        bombArray.push(bomb);
      }
    }
    console.log("medium");
    // console.log("play2");
    const griglia = document.getElementById("griglia");
    // console.log(griglia);

    function createSquare(counter) {
      const div = document.createElement("div");
      div.classList.add("square81");
      div.innerHTML = `<span>${counter}</span>`;
      return div;
    }

    // console.log(createSquare());

    for (let i = 1; i <= 81; i++) {
      let currentElement = createSquare(i);
      //   console.log(currentElement);

      currentElement.addEventListener("click", function () {
        // console.log(this);
        if (bombArray.includes(i)) {
          currentElement.classList.toggle("bombz");
          document.getElementById("sadMessage").classList.add("disBlock");
          document.getElementById("sadText").classList.add("txtBlock");
          document.getElementById("userScore").innerHTML =
            "Your total score is:  " + score;
        } else {
          currentElement.classList.toggle("active");
          score += 1;
        }
      });

      griglia.append(currentElement);
    }
  } else if (lvl == "hard") {
    while (bombArray.length < 16) {
      let bomb = Math.floor(Math.random() * 49) + 1;
      if (bombArray.includes(bomb) !== true) {
        bombArray.push(bomb);
      }
    }
    console.log("hard");
    // console.log("play2");
    const griglia = document.getElementById("griglia");
    // console.log(griglia);

    function createSquare(counter) {
      const div = document.createElement("div");
      div.classList.add("square49");
      div.innerHTML = `<span>${counter}</span>`;
      return div;
    }

    // console.log(createSquare());

    for (let i = 1; i <= 49; i++) {
      let currentElement = createSquare(i);
      //   console.log(currentElement);

      currentElement.addEventListener("click", function () {
        // console.log(this);
        if (bombArray.includes(i)) {
          currentElement.classList.toggle("bombz");
          console.log("GIOCO FINITO");

          document.getElementById("sadMessage").classList.add("disBlock");
          document.getElementById("sadText").classList.add("txtBlock");
          document.getElementById("userScore").innerHTML =
            "Your total score is:  " + score;
        } else {
          currentElement.classList.toggle("active");
          score += 1;
        }
      });

      griglia.append(currentElement);
    }
  } else {
    console.log("uccidimi");
    // document.getElementById("sadMessage").innerHTML =
    //   "Don't you wanna have fun?";
  }
}

function reset() {
  location.reload();
}
