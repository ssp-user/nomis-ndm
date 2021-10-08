// source - https://www.youtube.com/watch?v=F8xANXY0kaU
const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Marketing meeting",
            locatin: "skype"
        }
        resolve(meetingDetails);
    } else {
        reject(new Error('Meeting alrady scheduled'))
    }
});
meeting.then(res => {
    console.log('Meeting scheduled');
    console.log(res);
})
    .catch(err => {
        console.log(err.message);
    });