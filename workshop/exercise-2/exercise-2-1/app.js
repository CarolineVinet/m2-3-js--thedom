// Preset values
const FROGS = 3;
const orderedList = document.getElementById("track");

for (i = 1; i <= FROGS; i++) {
  let lane = document.createElement("li");
  orderedList.appendChild(lane);

  let laneNumber = document.createElement("span");
  laneNumber.innerText = i;
  lane.appendChild(laneNumber);

  lane.id = "frog " + i;
}

const racers = [];

for (let x = 0; x < FROGS; x++) {
  racers.push(frogStable[x]);
}

console.log(racers);
