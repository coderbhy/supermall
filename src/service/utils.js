export function scrollAnimation (targetY) {
  let timer = setInterval(() => {
    let currentY = document.documentElement.scrollTop || document.body.scrollTop;
    let distance = Math.abs(targetY - currentY);
    let speed = Math.ceil(distance / 10);
    if (currentY === targetY) {
      clearInterval(timer);
    } else {
      window.scrollTo(0, currentY > targetY ? currentY - speed : currentY + speed);
    }
  }, 10)
}

export function calcDate (originTime) {
  let time = new Date(+originTime * 1000);
  let year = time.getFullYear();
  let month = +time.getMonth() + 1;
  if (month.length == 1) {
    month = '0' + month;
  }
  let date = time.getDate();
  if (date.length == 1) {
    date = '0' + date;
  }
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  return `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`;
}