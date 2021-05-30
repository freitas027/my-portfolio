const checkbox = document.querySelector("#checkbox");
const contactBox = document.querySelector("#contact-box");
const themeMsg = document.querySelector("#theme-msg")

let theme = localStorage.getItem('current-theme');
const setDarkTheme = () => {
    document.documentElement.setAttribute("current-theme", "dark")
    localStorage.setItem("current-theme", "dark");
}
const setLightTheme = () => {
    document.documentElement.setAttribute("current-theme", "light");
    localStorage.setItem("current-theme", "light");
}

if (theme==='dark'){
    setDarkTheme();
    checkbox.checked = true;
    themeMsg.innerHTML = "Night Mode On  ";
}else{
    setLightTheme();
    checkbox.checked = false;
    themeMsg.innerHTML = "Night Mode Off";
}

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
const body = document.querySelector("body");

document.querySelector("#theme-toogle").addEventListener('click', ()=>{
    if (checkbox.checked){
        setDarkTheme();
        themeMsg.innerHTML = "Night Mode On  ";
    }else{
        setLightTheme();
        themeMsg.innerHTML = "Night Mode Off";
    }
});

document.body.addEventListener('click', (event)=>{
    if(event.target.id != "btn-contact" && event.target.id != "contact-box"){
        fadeOut();
        showing = false;
    }
},true);

const clock = document.querySelector("#clock");
setInterval(()=>{
    today = new Date(Date.now());
    const time = `<i class="far fa-clock"></i>${localeTwoDigits(today.getHours())}:${localeTwoDigits(today.getMinutes())}:${localeTwoDigits(today.getSeconds())}`
    clock.innerHTML = time;
}, 200);

function localeTwoDigits (number){
    return number.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
}