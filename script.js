//set variables
let user, reply;
let range = 2;
let randomNum = Math.ceil(Math.random() * range);
let point = 0;
const userCookie = document.cookie;

//Check if user cookie exist
if (userCookie == "") {
  user = prompt(
    "Let's play a simple guessing game. But first what is your name"
  );
  gamePlay(range, user);
} else {
  checkCookie(userCookie);
}

function gamePlay(range, user) {
  //function to play game
  if (!user) return;
  reply = prompt(
    `So ${user}, the game is simple, could you guess a number between 1 and ${range}`
  );
  if (reply != randomNum) {
    alert(`OOps you didnt get it your final score=${point}`);
    return;
  }
  saveCookie(user);
  range++;
  point++;
  randomNum = Math.ceil(Math.random() * range);
  gamePlay(range, user);
}

function checkCookie(userCookie) {
  //function to check and get cookie
  if (userCookie == "") return;
  let items = userCookie.split(";");
  let item = [];
  for (let i = 0; i < items.length; i++) {
    item.push(items[i].split("="));
  }

  user = item[0][1];
  range = item[1][1];
  point = item[2][1];

  alert(`Welcome back ${user} lets continue from where you left off`);
  gamePlay(range, user);
}

function saveCookie(user) {
  // function to save cookie
  const expdate = new Date();
  expdate.setTime(expdate.getTime() + 1 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + expdate.toUTCString();
  document.cookie = `user=${user};  ${expires}`;
  document.cookie = `range=${range}; ${expires}`;
  document.cookie = `point=${point}; ${expires}`;
}
