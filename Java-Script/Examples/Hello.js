function greetings(message) {
    console.log('inside promise function');
    return new Promise((resolve, reject) => {
        if (message === 'Hello') {
            resolve('It is resolved');
        } else {
            reject('It is rejected');
        }
    })
}

function processGreetings(response) {
    console.log('inside process greetings');
    return new Promise((resolve, reject) => {
        resolve('Greetings is processed ' + response);
    })
}

async function callGreetings(parameter) {
    parameter = await parameter;
    const mess = 'Helo';
    console.log('Call Greetings is invoked');
    try {
        const res = await greetings(mess);
        console.log('Response is ', res);
        const rep = await processGreetings(res);
        console.log('Process response is ' + rep);
    } catch (error) {
        console.log('Error is ', error);
    }
}

callGreetings(10);