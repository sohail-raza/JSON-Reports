// This is the value that should be read in from a file on disk
// Name, NR, Age, PPG
const csv = `
name, nr, age, ppg
John Doe, 14, 27, 40
Alex Mark, 13, 23, 45
`;

const lines = csv.split(/\r|\n/);
let data = [];
let i = 0;
let keys = [];
lines.forEach(line => {
  if (line === "") return;
  if (i++ === 0) {
    keys = line.split(",");
    return;
  }

  let values = line.split(",");
  let obj = {};
  for (let j = 0; j < keys.length; j++) {
    obj[keys[j]] = values[j];
  }
  data.push(obj);
});

let report = {
  by_age: data.sort((a, b) => {
    return a.age < b.age ? 1 : -1;
  })
};

document.querySelector("body").innerHTML = JSON.stringify(report);
