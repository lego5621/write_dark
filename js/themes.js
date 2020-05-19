var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

var but = document.getElementById("but_color_themes");

but.addEventListener("click", tog_color);

function tog_color(){
    if (rootStyles.getPropertyValue('--background')=="rgb(8, 8, 8)"){
        root.style.setProperty('--background', 'rgb(255, 255, 255)');
        root.style.setProperty('--text_spec', 'rgb(51, 51, 51)');
    }else{
        root.style.setProperty('--background', 'rgb(8, 8, 8)');
        root.style.setProperty('--text_spec', 'rgb(190, 190, 190)');
    }
};