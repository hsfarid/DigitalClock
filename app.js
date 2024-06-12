//get html references
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const sec = document.querySelector(".sec");

const timerFunc = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  hours.textContent = h;
  mins.textContent = m;
  sec.textContent = s;
};

setInterval(timerFunc, 1000);
