//Source - Series - https://www.youtube.com/watch?v=DHvZLI7Db8E&list=RDCMUCFbNIlppjAuEX4znoulh0Cw&index=2

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded');
});
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recorded');
});

Promise.all([recordVideoOne, recordVideoTwo]).then((messages) => {
    console.log(messages)
});
