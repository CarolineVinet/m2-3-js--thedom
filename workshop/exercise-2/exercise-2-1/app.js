const FROGS = 3;
const track = document.getElementById("track");
let progressContainer = document.createElement("div");
const main = document.querySelector("main");
main.appendChild(progressContainer);
for (let i = 0; i < FROGS; i++) {
  let lane = document.createElement("li");
  track.appendChild(lane);
  let number = document.createElement("span");
  number.innerText = i + 1;
  lane.appendChild(number);
  lane.id = "lane-" + i;
}
const racers = [];
for (let x = 0; x < FROGS; x++) {
  racers.push(frogStable[x]);
}
racers.forEach(function (racer, index) {
  let lane = document.getElementById("lane-" + index);
  let frog = document.createElement("span");
  frog.classList.add("frog");
  frog.style.backgroundColor = racer.color;
  frog.innerText = "frog" + index;
  frog.progress = 0;
  let progressSpan = document.createElement("span");
  progressSpan.id = "lane-progress-" + index;
  progressSpan.innerText = frog.progress + "%";
  progressContainer.appendChild(progressSpan);
  lane.appendChild(frog);
});
