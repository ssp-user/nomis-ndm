const flag = true;
const isWeekend = new Promise((resolve, reject) => {
    if (!flag) {
        const dayDetails = {
            day: "Hurray.. Saturday or Sunday"
        }
        resolve(dayDetails);
    } else {
        reject(new Error("Working day :( "));
    }
});

isWeekend.then(res => {
    console.log('It is weekend');
    console.log(res);
})
    .catch(err => {
        console.log(err.message);
    });