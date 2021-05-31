const contactBox = document.querySelector("#contact-box");
const themeMsg = document.querySelector("#theme-msg")
const body = document.querySelector("body");
const themeToogle = document.querySelector("#theme-toogle");
const contactClose = document.querySelector('#contact-close');
const clock = document.querySelector("#clock");
const btnMain = document.querySelector("#btn-main");
const checkbox = document.querySelector("#checkbox");

// Theme switching using local storage
// Variables declared on theme.js
if (theme==='dark'){
    setDarkTheme();
    checkbox.checked = true;
    themeMsg.innerHTML = "Night Mode On  ";
}else{
    setLightTheme();
    checkbox.checked = false;
    themeMsg.innerHTML = "Night Mode Off";
}
themeToogle.addEventListener('click', ()=>{
    if (checkbox.checked){
        setDarkTheme();
        themeMsg.innerHTML = "Night Mode On  ";
    }else{
        setLightTheme();
        themeMsg.innerHTML = "Night Mode Off";
    }
});

// Contact box manageging
let showing = false;
let animationDuration = getComputedStyle(contactBox).animationDuration.replace("s", "");
animationDuration = (+animationDuration*1.2)*1000;
console.log(animationDuration);

function fadeOut() {
    contactBox.classList.remove("fade-in");
    contactBox.classList.add("fade-out");
    setTimeout(() => {
        if(!showing){
            contactBox.classList.add("hide");
        }
    },animationDuration);
}
document.querySelector("#btn-contact").addEventListener('click', () =>{
    showing = !showing;
    if(showing){
        contactBox.classList.remove("fade-out", "hide");
        
        contactBox.classList.add("fade-in");
    }
    else{
        fadeOut();
    }
});

document.body.addEventListener('click', (event)=>{
    if(contactBox.contains(event.target) || themeToogle.contains(event.target)){
        return;
    }
    if(event.target.id != "btn-contact" && event.target.id != "contact-box"){
        fadeOut();
        showing = false;
    }
},true);
contactClose.addEventListener('click', ()=> {
    fadeOut();
    showing = false;
});

// Clock update
setInterval(()=>{
    today = new Date(Date.now());
    const time = `${localeTwoDigits(today.getHours())}:${localeTwoDigits(today.getMinutes())}:${localeTwoDigits(today.getSeconds())}`
    clock.innerHTML = time;
}, 300);

// Main page button reload
btnMain.addEventListener('click', ()=>{
    window.location.reload();
});
// Utility function
function localeTwoDigits (number){
    return number.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
}