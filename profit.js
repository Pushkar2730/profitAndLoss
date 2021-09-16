let initialPrice  =document.querySelector("#initial-price");
let stockQuantity =document.querySelector("#stocks-quantity");
let currentPrice =document.querySelector("#current-price");
let output=document.querySelector("#output");
let SubmitBtn=document.querySelector("#submit-btn");


SubmitBtn.addEventListener('click',
clickHandler);

function clickHandler(){
    var strtPrice=Number(initialPrice.value);
    var qty=Number(stockQuantity.value);
    var endPrice=Number(currentPrice.value);
       
    CalcInvestment(strtPrice,qty,endPrice);
}

function CalcInvestment(initial,stock,current){
    console.log(initial);
var lop=(current-initial)*stock;
lopPercent=(lop/(initial*stock))*100;

if(lop>0){
output.innerText="the profit is  "+ lop +" and the percent is "+ lopPercent+"%";
}else if(lop==0){
    //no profit nd loss
    output.innerText="no gain no pain";
}
else{
    //loss
    lop=-lop;
    lopPercent=-lopPercent;
    output.innerText="the loss is "+ lop +" and the percent is "+ lopPercent +"% ";
}
}
