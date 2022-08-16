var bg = document.getElementById('hero')
var logo = document.getElementById('logo-span')

document.getElementById('cat').addEventListener('click', function(){
    bg.style.backgroundImage = 'url("../img/main-img.png")';
    logo.style.color = "red";
});
document.getElementById('kenshin').addEventListener('click', function(){
    bg.style.backgroundImage = 'url("../img/background.jpg")';
    logo.style.color = "black";
});