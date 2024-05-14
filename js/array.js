
// 배열 순회 

let data = [1, 2, 3];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

data.forEach(function(value) {
    console.log("value is", value);
});

for (let value of data) {
    console.log(value);
}

for (let idx in data) {
  console.log(data[idx]);
}

