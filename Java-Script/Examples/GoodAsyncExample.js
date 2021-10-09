// Source - https://www.youtube.com/watch?v=V_Kr9OSfDeU

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log('Making Request to', location);
        if (location === 'Google') {
            resolve('Google says hi');
        } else {
            reject('We can ony talk to Google');
        }
    });
}
function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve('Extra Information ' + response);
    });
}
// Below is traditional way of working
/*
makeRequest('Google).then(response => {
    console.log('Response received');
    return processRequest(response);
}).then(processedResponse => {
    console.log(processedResponse);
}).catch(err => {
    console.log(err);
});
*/
// Advanced await mechanism 

async function doWork() {
    try {
        const response = await makeRequest('Googless');
        console.log('Response received');
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    } catch (error) {
        console.log(error);
    }
}
doWork();

