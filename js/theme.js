// Pre-loading the theme

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
}else{
    setLightTheme();
}