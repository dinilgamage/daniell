//get references to interactive elements
const Form = document.getElementById("ticketForm");
const Name = document.getElementById("name");
const EmailAddress = document.getElementById("emailAdd");
const ForeignAdults = document.getElementById("Fadults");
const ForeignChild = document.getElementById("Fchildren");
const LocalAdults = document.getElementById("Ladults");
const LocalChildU6 = document.getElementById("childU6");
const LocalChildU15 = document.getElementById("childU15");
const FoodToken = document.getElementById("foodToken");
const AnnualPass = document.getElementById("annualPass");

const txtOutput = document.getElementById("output");

//add eventlistners
let btnAddOrder = document.getElementById("addToOrder");
btnAddOrder.addEventListener("click", AddtoOrder);
btnAddOrder.addEventListener("click", Additionals);
btnAddOrder.addEventListener("click", FinalTotal);

let btnPlaceOrder = document.getElementById("placeToOrder");
btnPlaceOrder.addEventListener("click",PlaceToOrder);

let bntReset = document.getElementById("reset");
bntReset.addEventListener("click" , Reset);

let additionals = 0;

function Reset(){
    location.reload()
}

function AddtoOrder(event){
        event.preventDefault();

        let name = Name.value;
        let fadult = parseInt(ForeignAdults.value); 
        let fchild = parseInt(ForeignChild.value); 
        let ladult = parseInt(LocalAdults.value); 
        let lchildu6 = parseInt(LocalChildU6.value);
        let lchildu15 = parseInt(LocalChildU15.value);  
        let annualpass = parseInt(AnnualPass.value); 
        let foodtoken = parseInt(FoodToken.value);

        let subtotal = fadult*3000 + fchild*2500 + ladult*2500 + lchildu6*500 + lchildu15*1000 + annualpass*5000 + foodtoken*500;

        document.getElementById("p1").innerText=`Name: ${name}`;
        document.getElementById("p2").innerText=`Number of Foreign Adults: ${fadult}`;
        document.getElementById("p3").innerText=`Number of Foreign Children: ${fchild}`;
        document.getElementById("p4").innerText=`Number of Local Adults: ${ladult}`;
        document.getElementById("p5").innerText=`Number of Local Children Under the Age of 6: ${lchildu6}`;
        document.getElementById("p6").innerText=`Number of Local Children Under the Age of 15: ${lchildu15}`;
        document.getElementById("p7").innerText=`Number of Annual Passes: ${annualpass}`;
        document.getElementById("p8").innerText=`Number of Food Token: ${foodtoken}`;

        document.getElementById("p9").innerText=`Sub Total: ${subtotal}`;

}



function Additionals(){


    let threehr=document.getElementById("3hr");
    let halfDay=document.getElementById("halfDay");
    let fullDay=document.getElementById("fullDay");
    let twodays=document.getElementById("2days");

    let fadult = parseInt(ForeignAdults.value); 
    let fchild = parseInt(ForeignChild.value); 
    let ladult = parseInt(LocalAdults.value); 
    let lchildu6 = parseInt(LocalChildU6.value);
    let lchildu15 = parseInt(LocalChildU15.value);

    if(threehr.checked==true&&fadult!=0||fchild!=0){
        additionals+=1000
    }
    else if(halfDay.checked==true&&fadult!=0||fchild!=0){
        additionals+=500
    }
    else if(fullDay.checked==true&&fadult!=0||fchild!=0){
        additionals+=1000
    }
    else if(twodays.checked==true&&fadult!=0||fchild!=0){
        additionals+=2000
    }


    if(halfDay.checked==true&&ladult!=0||lchildu6!=0||lchildu15!=0){
        additionals+=250
    }
    else if(fullDay.checked==true&&ladult!=0||lchildu6!=0||lchildu15!=0){
        additionals+=500
    }
    else if(twodays.checked==true&&ladult!=0||lchildu6!=0||lchildu15!=0){
        additionals+=1000
    }


    document.getElementById("p10").innerText=`Additional Charges: ${additionals}`;

}

function FinalTotal(){

    let fadult = parseInt(ForeignAdults.value); 
    let fchild = parseInt(ForeignChild.value); 
    let ladult = parseInt(LocalAdults.value); 
    let lchildu6 = parseInt(LocalChildU6.value);
    let lchildu15 = parseInt(LocalChildU15.value);  
    let annualpass = parseInt(AnnualPass.value); 
    let foodtoken = parseInt(FoodToken.value);

    let subtotal = fadult*3000 + fchild*2500 + ladult*2500 + lchildu6*500 + lchildu15*1000 + annualpass*5000 + foodtoken*500;

    let finalTotal=subtotal+additionals;
    document.getElementById("p11").innerText=`Final Total: ${finalTotal}`;
}

function PlaceToOrder(){

    let threehr=document.getElementById("3hr");
    let halfDay=document.getElementById("halfDay");
    let fullDay=document.getElementById("fullDay");
    let twodays=document.getElementById("2days");

    
    let fadult = parseInt(ForeignAdults.value); 
    let fchild = parseInt(ForeignChild.value); 
    let ladult = parseInt(LocalAdults.value); 
    let lchildu6 = parseInt(LocalChildU6.value);
    let lchildu15 = parseInt(LocalChildU15.value);  
    let annualpass = parseInt(AnnualPass.value); 
    let foodtoken = parseInt(FoodToken.value);

    let subtotal = fadult*3000 + fchild*2500 + ladult*2500 + lchildu6*500 + lchildu15*1000 + annualpass*5000 + foodtoken*500;

    let finalTotal=subtotal+additionals;


    
    if(threehr.checked==true||halfDay.checked==true||fullDay.checked==true||twodays.checked==true){
        alert(`Thank you for you Reservation!\nYour total is ${finalTotal}!\nA receipt will be sent to you via Email!\nTrain ID: 744 `);
    }
    else{
        alert("Your Order is Incomplete")
    }

}

