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
    if(ip>0&&qty>0&&curr>0){
        calcProfitLoss(ip,qty,curr);
    }
    else if(ip<=0||qty<=0||curr<=0){
        outputBox.innerText= "⚠ Required Fields can't be 0 or negative ⚠";
        outputBox.style.color = 'yellow';
    }

    
    else{
        outputBox.innerText= '⚠ Enter Required Fields ⚠' ;
        outputBox.style.color = 'yellow';
    }
    
}


function calcProfitLoss(initial, quantity, current){
    if(initial>current){
        var loss = ((initial-current)*quantity).toFixed(2);
        var lossPercent = ((loss / (initial * quantity)) * 100).toFixed(2);
        outputBox.innerText = `Your Loss is ${loss}₹ and Loss Percentage ${lossPercent}%.`
        outputBox.style.color = 'crimson';
        
    } else if(initial < current){
        var profit = ((current-initial)*quantity).toFixed(2);
        var profitPercent = ((profit / (initial * quantity)) * 100).toFixed(2);
        outputBox.innerText = `Your Profit ${profit}₹ and Profit Percentage ${profitPercent}%.`
        outputBox.style.color = 'green';
    }
    else{
        outputBox.innerText = `No Profit No loss`
        outputBox.style.color = 'blue';
    }
}



calcBtn.addEventListener("click", submitHandler)
