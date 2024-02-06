//GETTING REQUIRED ELEMENTS
const realTimeSwitch = document.querySelector(".turnSwitcher");
const turnSwitcher = document.querySelectorAll(".turnSwitcher span");
const gameWrapper = document.querySelectorAll(".gameWrapper div");
const board = document.querySelector(".gameWrapper");
const winingAlert = document.querySelector(".winingAlert");
const winingMsg = document.querySelector(".winingMsg");
const button = document.querySelector(".button");
const playWithComputerBtn = document.querySelector(".compPlay");
const playWithFriendBtn = document.querySelector('.playwithFriend');
const playModeContainer = document.querySelector('.playModeContainer');

//MAKING A DRAW BASKET
let drawBasket = [];

//STARTING WINING FUNCTION
let winingFunction = (realtime) => {
  if (
    gameWrapper[0].innerHTML === realtime.id &&
    gameWrapper[1].innerHTML === realtime.id &&
    gameWrapper[2].innerHTML === realtime.id
  ) {
    winingMsg.innerHTML = `player ${realtime.id} wins`;
    winingAlert.style.display = "block";
    realTimeSwitch.style.display = "none";
    board.style.display = "none";
  } else if (
    gameWrapper[3].innerHTML === realtime.id &&
    gameWrapper[4].innerHTML === realtime.id &&
    gameWrapper[5].innerHTML === realtime.id
  ) {
    winingMsg.innerHTML = `player ${realtime.id} wins`;
    winingAlert.style.display = "block";
    realTimeSwitch.style.display = "none";
    board.style.display = "none";
  } else if (
    gameWrapper[6].innerHTML === realtime.id &&
    gameWrapper[7].innerHTML === realtime.id &&
    gameWrapper[8].innerHTML === realtime.id
  ) {
    winingMsg.innerHTML = `player ${realtime.id} wins`;
    winingAlert.style.display = "block";
    realTimeSwitch.style.display = "none";
    board.style.display = "none";
  } else if (
    gameWrapper[0].innerHTML === realtime.id &&
    gameWrapper[3].innerHTML === realtime.id &&
    gameWrapper[6].innerHTML === realtime.id
  ) {
    winingMsg.innerHTML = `player ${realtime.id} wins`;
    winingAlert.style.display = "block";
    realTimeSwitch.style.display = "none";
    board.style.display = "none";
  } else if (
    gameWrapper[1].innerHTML === realtime.id &&
    gameWrapper[4].innerHTML === realtime.id &&
    gameWrapper[7].innerHTML === realtime.id
  ) {
    winingMsg.innerHTML = `player ${realtime.id} wins`;
    winingAlert.style.display = "block";
    realTimeSwitch.style.display = "none";
    board.style.display = "none";
  } else if (
    gameWrapper[2].innerHTML === realtime.id &&
    gameWrapper[5].innerHTML === realtime.id &&
    gameWrapper[8].innerHTML === realtime.id
  ) {
    winingMsg.innerHTML = `player ${realtime.id} wins`;
    winingAlert.style.display = "block";
    realTimeSwitch.style.display = "none";
    board.style.display = "none";
  } else if (
    gameWrapper[0].innerHTML === realtime.id &&
    gameWrapper[4].innerHTML === realtime.id &&
    gameWrapper[8].innerHTML === realtime.id
  ) {
    winingMsg.innerHTML = `player ${realtime.id} wins`;
    winingAlert.style.display = "block";
    realTimeSwitch.style.display = "none";
    board.style.display = "none";
  } else if (
    gameWrapper[2].innerHTML === realtime.id &&
    gameWrapper[4].innerHTML === realtime.id &&
    gameWrapper[6].innerHTML === realtime.id
  ) {
    winingMsg.innerHTML = `player ${realtime.id} wins`;
    winingAlert.style.display = "block";
    realTimeSwitch.style.display = "none";
    board.style.display = "none";
  } else if (drawBasket.length === 9) {
    winingMsg.innerHTML = "the game is draw!";
    winingAlert.style.display = "block";
    realTimeSwitch.style.display = "none";
    board.style.display = "none";
  }
};

//MAKING PLAYING AND WINING FUNCTIONS
let itemfunction = (realtime, cont) => {
  if (realtime.id === "x") {
    turnSwitcher[0].classList.add("active");
    turnSwitcher[1].classList.remove("active");
    realtime.id = "o";
    cont.innerHTML = realtime.id;
    cont.id = cont.innerHTML;
    drawBasket.push(cont.id);
  } else {
    turnSwitcher[1].classList.add("active");
    turnSwitcher[0].classList.remove("active");
    realtime.id = "x";
    cont.innerHTML = realtime.id;
    cont.id = cont.innerHTML;
    drawBasket.push(cont.id);
    console.log(drawBasket, drawBasket.length);
  }
};

// STARTING PLAY AGAIN BTN FUNCTION
button.addEventListener("click", () => {
  winingAlert.style.display = "none";
  realTimeSwitch.style.display = "flex";
  board.style.display = "grid";
  realTimeSwitch.id = "x";
  drawBasket.length = 0;
  gameWrapper.forEach((element) => {
    element.innerHTML = "";
  });
});

//STARTING CLICKING FUNTION
gameWrapper.forEach((container) => {
  container.addEventListener("click", () => {
    if (container.innerHTML != "") {
      return;
    } else {
      itemfunction(realTimeSwitch, container);

      //INVOKING WINING FUNCTION
      winingFunction(realTimeSwitch);
    }
  });
});

//STARTING PLAT WITH COMPUTER FUNCTION
playWithComputerBtn.addEventListener('click', () =>{

  //MAKING ALL NEEDED STYLES
  board.id = 'computerMode';
  board.style.display = 'grid'
  realTimeSwitch.style.display = 'flex'
  playModeContainer.style.display = 'none'

  //STARTING COMPUTER FUNCTION
  /*let findAvailableContainer = gameWrapper.find((item) => {return item.id = ''});
  console.log(findAvailableContainer)
  let availablecontainer = []*/
}); 

/*let min = 0;
let max = 8;

const genration = (min,max) =>{
    let generatedNumber = Math.floor(Math.random() * (max - min)) + min
    document.write(generatedNumber);
}

genration(min, max);*/
