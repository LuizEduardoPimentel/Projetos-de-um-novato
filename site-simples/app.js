'user strict'

const switching = document.querySelector('.bnt');

switching.addEventListener('click',function(){
    document.body.classList.toggle('dark_theme')
    var className = document.body.className;
    if (className == 'light_theme') {
        this.textContent = 'Dark';
        document.getElementById("text").style.color= "red";
    }
    else {
        this.textContent = 'Light';
        document.getElementById("text").style.color= "black"
    }
    console.log('Currunt Class name: '+ className);
});