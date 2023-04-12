window.onload = function() {
    let website = new CountUp('year-count', 0, 30, 0, 2.5);
    website.start();
    let happyPatients = new CountUp('happy-patients', 0, 150, 0, 2.5);
    happyPatients.start();
    let expertsDoctors = new CountUp('experts-doctors', 0, 120, 0, 2.5);
    expertsDoctors.start();
    let hospitalRoom = new CountUp('hospital-room', 0, 30, 0, 2.5);
    hospitalRoom.start();
    let awardWinner = new CountUp('award-winner', 0, 70, 0, 2.5);
    awardWinner.start();
};

document.getElementById("year").innerHTML = new Date().getFullYear();