function riseNShine(name, time, day) {
    console.log('Wake up ' + name + "! It's " + time + " on" + day);
}

let nameofperson = process.argv[2];
let timeofwake = process.argv[3];
let dayofwake = process.argv[4];
riseNShine('Mo', 10, 'Saturday');