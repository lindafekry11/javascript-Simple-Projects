function validateUsername(){
let u=document.forms["myForm"]["uName"].value;
if(u == "admin"){
return true;
}
else{
    alert("Invalid Username"); 
    return false;
}
}

function validatePassword(){
let p=document.forms["myForm"]["psw"].value;
if(p == "421$$"){
return true;
}
else{
    alert("Invalid Password");
    return false;
} 
}

function validateForm(){
    let u=document.forms["myForm"]["uName"].value;
    let p=document.forms["myForm"]["psw"].value;
    if(u == "admin" && p == "421$$"){
        alert("Welcome Login Success..");
        return true;
        }
        else{
            alert("Please enter valid data :'(( !");
            return false;
        }

}



