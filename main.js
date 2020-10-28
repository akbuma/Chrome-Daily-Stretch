// Add stretches in the following format: [stretch name, image link]
let arrayOfStretches = [
    ["Shoulder Extensions", "https://assets.bupa.co.uk/~/media/images/healthmanagement/blogs/desk-stretches-2020/shoulder-extensions-600-600.jpg"], 
    ["Sitting Back Extensions", "https://assets.bupa.co.uk/~/media/images/healthmanagement/blogs/desk-stretches-2020/sitting-back-extension-600-600.jpg"],
    ["Shoulder Shrugs", "https://assets.bupa.co.uk/~/media/images/healthmanagement/blogs/desk-stretches-2020/shoulder-shrugs-600-600.jpg"], 
    ["Posterior Shoulder Stretch", "https://assets.bupa.co.uk/~/media/images/healthmanagement/blogs/desk-stretches-2020/shoulder-stretch-600-600.jpg"],
    ["Overhead Tricep Stretch", "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Triceps_Stretch.gif?h=840"],
    ["Trunk Rotation", "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Torso_Stretch.gif?h=840"], 
    ["Neck Stretches", "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Neck_Stretch.gif?h=840"], 
];

let countdown = new Countdown(1, 40); // ADJUST COUNTDOWN (2, 0)
let STRETCH_TIME = 20;

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