
let arrayOfStretches = [
    ["Shoulder Extensions", "https://assets.bupa.co.uk/~/media/images/healthmanagement/blogs/desk-stretches-2020/shoulder-extensions-600-600.jpg"], 
    ["Sitting Back Extensions", "https://assets.bupa.co.uk/~/media/images/healthmanagement/blogs/desk-stretches-2020/sitting-back-extension-600-600.jpg"],
    ["Shoulder Shrugs", "https://assets.bupa.co.uk/~/media/images/healthmanagement/blogs/desk-stretches-2020/shoulder-shrugs-600-600.jpg"], 
    ["Posterior Shoulder Stretch", "https://assets.bupa.co.uk/~/media/images/healthmanagement/blogs/desk-stretches-2020/shoulder-stretch-600-600.jpg"],
    ["The Michael Scott", "https://media0.giphy.com/media/Mi9mmYLtj5tyE/200w.webp?cid=ecf05e47fa0cba2d04e7815a6e680424788887606b72894e&rid=200w.webp"], 
    ["Overhead Tricep Stretch", "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Triceps_Stretch.gif?h=840"],
    ["Trunk Rotation", "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Torso_Stretch.gif?h=840"], 
    ["Neck Stretches", "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Neck_Stretch.gif?h=840"], 
    ["The Hip Dislocator", "https://media3.giphy.com/media/TImyybMffWDaU/200.webp?cid=ecf05e47d48f34f3657ef602e6e0d8178b4dbac7ad3ea93b&rid=200.webp"], 
    ["The Snake", "https://media3.giphy.com/media/RJ8THWBJQBc126Vmyu/200w.webp?cid=ecf05e4720ca36bea6e3be9186a811cf1b4408cab56a913c&rid=200w.webp"], 
    ["The Michael Scott 2.0", "https://media3.giphy.com/media/xhDniL1GXz43u/200.webp?cid=ecf05e47d48f34f3657ef602e6e0d8178b4dbac7ad3ea93b&rid=200.webp"]
];

let countdown = new Countdown(0, 45); // ADJUST COUNTDOWN (2, 0)
let STRETCH_TIME = 15;

let imgTimer = STRETCH_TIME; // ADJUST TIMER (10)
let timer = document.getElementById('countdown');
let miniTimer = document.getElementById('miniTimer');

miniTimer.innerText = 'Get Ready'
setTimeout(function() {
    changeStretch();
}, 1000);

let button = document.getElementById("changeExercise");
button.addEventListener("click", changeStretch);

let test = setInterval(function() {

    if(imgTimer === 0) {
       changeStretch();
    }

    if(countdown.totalSeconds === 0) {
        clearInterval(test);
        getBackToWork();
    }

    let minutes = countdown.getMinutes() < 10 ? "0" + countdown.getMinutes() : countdown.getMinutes();
    let seconds = countdown.getSeconds() < 10 ? "0" + countdown.getSeconds() : countdown.getSeconds();
    timer.innerText = `${minutes}:${seconds}`;
    
    if(countdown.totalSeconds === 0) {
        miniTimer.innerText = 'Great Job!'
    } else {
        miniTimer.innerText = imgTimer;
    }
    
    countdown.subtractTime();
    imgTimer -= 1;

}, 1000)

// Helper Functions
function stretchChooser(arrayOfStretches) {
  let index = Math.floor(Math.random() * arrayOfStretches.length)
  let result = arrayOfStretches[index] 
  arrayOfStretches.splice(index, 1)
  return result;
}

function changeStretch() {
    let chosenStretch = stretchChooser(arrayOfStretches);
    stretchName.innerText = chosenStretch[0];
    stretchImg.src = chosenStretch[1];
    imgTimer = STRETCH_TIME; // CHANGE HERE
}

function getBackToWork() {
    stretchImg.src = 'https://media0.giphy.com/media/W3Ch3vjHi5FGefDT0G/giphy.gif'
    stretchName.innerText = '---'
    miniTimer.innerText = 'Finished!';
    button.disabled = true;
}