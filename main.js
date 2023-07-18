let time = 0;
let simRate = 10;
const frameRate = 25;
const intervalTime = 1000 / frameRate;
const scale = parseInt(document.querySelector('.system').clientWidth) / 4500000000;
const planetMag = 10

document.querySelector('.viewport').scrollTo((parseInt(document.querySelector('.system').clientWidth) / 2) - (window.innerWidth / 2), (parseInt(document.querySelector('.system').clientWidth) / 2) - (window.innerHeight / 2))

const mercury = document.querySelector('.mercury');

function planetMonitor(planet, info, time) {
  const speed = 2 / (info[2] * 1000 / intervalTime);

  const orbit = planet.parentElement;

  planet.style.width = info[0] + 'px';
  planet.style.height = info[0] + 'px';

  orbit.style.width = info[1] + 'px';
  orbit.style.height = info[1] + 'px';

  const center = {
    x: orbit.clientWidth / 2,
    y: orbit.clientHeight / 2
  }

  let angle = (speed * simRate * time * Math.PI) % (2 * Math.PI);

  const y = center.y * Math.sin(angle) + center.y;
  const x = center.x * Math.cos(angle) + center.x;

  planet.style.top = `${y}px`;
  planet.style.left = `${x}px`;
}

function runSim() {
  time = time + 1;
  document.querySelector('.sim-days').innerText = Math.floor(time / 25 * simRate) + ' Earth-days';

  planetMonitor(mercury, [planetMag * 4879.4 * scale, 57900000 * scale, 88], time)
  planetMonitor(document.querySelector('.venus'), [planetMag * 12104 * scale, 108200000 * scale, 225], time)
  planetMonitor(document.querySelector('.earth'), [planetMag * 12756 * scale, 149600000 * scale, 356.24], time)
  planetMonitor(document.querySelector('.mars'), [planetMag* 6779 * scale, 227900000 * scale, 669], time)
  planetMonitor(document.querySelector('.jupiter'), [planetMag * 142800 * scale, 778300000 * scale, 12 * 356.24], time)
  planetMonitor(document.querySelector('.saturn'), [planetMag * 120660 * scale, 1427000000 * scale, 30 * 356.24], time)
  planetMonitor(document.querySelector('.uranus'), [planetMag * 51118 * scale, 2871000000 * scale, 84 * 356.24], time)
  planetMonitor(document.querySelector('.neptune'), [planetMag * 49528 * scale, 4497100000 * scale, 165 * 356.24], time)
}


setInterval(
  runSim, intervalTime
)