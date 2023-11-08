let UserName=document.getElementById("txtuserName");
let iD=document.getElementById("txtID");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let BirthDate=document.getElementById("txtbirthDate");

function validateInput() {
    //periksa nama pengguna yang kosong
    if(UserName.value.trim()==="") {
        onError(UserName,"Nama pengguna tidak boleh kosong");
    } else{
        onSuccess(UserName);
    }
    if(email.value.trim()==="") {
        onError(email,"Email tidak boleh kosong");
    } else {
        if(!isValidEmail(email.value.trim())) {
            onError(email,"Email tidak valid");
        } else {
            onSuccess(email);
        }
    }
}

document.querySelector("button")
.addEventListener("click",(event)=> {
    event.preventDefault()
    validateInput();
});

function onSuccess(input) {
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}

function onError(input,message) {
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }


