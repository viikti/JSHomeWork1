const someNumber = Math.floor(100 * Math.random()) + 1;
console.log(someNumber);
let count = 3;

document.getElementById(`check`).onclick = function () {
  if (count > 0) {
    const userNumber = document.getElementById(`mynum`).value;
    userNumber = parseInt(userNumber);
    const out = document.getElementById(`out`);

    if (userNumber === someNumber) {
      out.innerHTML = `yohoo you are winner!!!!`;
    } else if (userNumber > someNumber) {
      out.innerHTML = `the correct number is greater`;
    } else if (userNumber < someNumber) {
      out.innerHTML = `the correct number is less`;
    }

    document.getElementById(`count`).innerHTML = `attempts left:` + count;
    count -= 1;
  } else {
    alert(`attempts are over. reload the page to resume`);
    location.reload;
  }
};
