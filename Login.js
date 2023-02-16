"use script"

var users = JSON.parse(localStorage.getItem('users'));

var copylogin = false;
var bob = false;
let flogin = document.querySelector(".All")
let BtLogin = document.querySelector("#bt")
let flg = document.querySelector("#lg")
let fpw = document.querySelector("#pw")
let fmes = document.querySelector("#mes")

BtLogin.addEventListener("click",login)


function login() {
    let lg = flg.value;

    localStorage.setItem('name', JSON.stringify(lg));

    let pw = fpw.value;

    for (const user of users){
       
        if(user.lg == lg && user.pw == pw)
        {
            role(user.pl)
            fmes.innerHTML = ""
            break;
        }
        else if(user.lg != lg / user.pw != pw)
        {
            fmes.innerHTML = "Unknown User"
        }
        }
}

function role(role){
    if(role == "user")
    {
        document.location.href = "user.html"
    }
    else if (role == "admin")
    {
        document.location.href = "admin.html"
    }
}