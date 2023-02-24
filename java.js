let button = document.querySelector(`nav .button`)
let sidebar = document.querySelector(`.sidebar`)

function sideBarToggler(){
    sidebar.classList.toggle(`active`)

    if(sidebar.classList.contains(`active`) == true){
        button.innerHTML = `<i class="bi bi-x"></i>`
    }
    else{
        button.innerHTML = `<i class="bi bi-list"></i>`
    } 
}

button.addEventListener(`click`,sideBarToggler)