var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var calcBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output')
var bod = document.querySelector(".container")

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    if(ip&&qty&&curr){
        calcProfitLoss(ip,qty,curr);
    }
    else{
        outputBox.innerText= '⚠ Enter Required Fields ⚠' ;
        outputBox.style.color = 'yellow';
    }
    
}


function calcProfitLoss(initial, quantity, current){
    if(initial>current){
        var loss = ((initial-current)*quantity).toFixed(2);
        var lossPercent = ((loss/initial)*100).toFixed(2);
        outputBox.innerText = `Your Loss is ${loss} and Loss Percentage ${lossPercent}%.`
        outputBox.style.color = 'crimson';
        
    } else if(initial < current){
        var profit = ((current-initial)*quantity).toFixed(2);
        var profitPercent = ((profit/initial)*100).toFixed(2);
        outputBox.innerText = `Your Profit ${profit} and Profit Percentage ${profitPercent}%.`
        outputBox.style.color = 'green';
    }
    else{
        outputBox.innerText = `No Profit No loss`
        outputBox.style.color = 'blue';
    }
}



calcBtn.addEventListener("click", submitHandler)