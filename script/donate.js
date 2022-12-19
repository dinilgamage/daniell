//add eventlistners
let btndonate = document.getElementById("donation");
btndonate.addEventListener("click" , donation);


function donation(){
    //get references to interactive elements
    const email = document.getElementById("emaildonate").value;
    const name = document.getElementById("namedonate").value;
    const cardnumber = document.getElementById("numberdonate").value;
    const month = document.getElementById("monthdonate").value;
    const cvc = document.getElementById("cvc").value;
    const donateamount = document.getElementById("donateamount").value;
    
    if(name=="" || name.length<5){
        alert("Please enter your full name");
        document.getElementById("namedonate").focus();
        return false; //prevents submission of form if value not entered
    }
    if(email.indexOf("@")==-1 || email.indexOf(".")==-1){
        alert("Please enter valid email address");
        document.getElementById("emaildonate").focus();
        return false;
    }
    if(cardnumber=="" || cardnumber.length<16){
        alert("Please enter valid card number");
        document.getElementById("numberdonate").focus();
        return false;
    }
    if(month=="" || month.length<5){
        alert("Please enter valid month");
        document.getElementById("monthdonate");
        return false;
    }
    if(cvc=="" || cvc.length<3){
        alert("Please enter valid cvc number");
        document.getElementById("cvc").focus();
        return false;
    }
    if(donateamount==""){
        alert("Please select your donation amount");
        document.getElementById("donateamount").focus();
        return false;
    }
    
    resetdonateform();
    
    alert("Thank you " + name + " you have succesfully donated");
    return;
}

// to reset the donation form
function resetdonateform(){
    document.getElementById("donate").reset();
}