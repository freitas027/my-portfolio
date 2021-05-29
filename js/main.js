let showing = false;
const contactBox = document.querySelector("#contact-box");
console.log(contactBox);

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
    if(event.target.id != "btn-contact" && event.target.id != "contact-box"){
        fadeOut();
        showing = false;
    }
},true);

const clock = document.querySelector("#clock");
setInterval(()=>{
    today = new Date(Date.now());
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    clock.innerHTML = time;
}, 200);