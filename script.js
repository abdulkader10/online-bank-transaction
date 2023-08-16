//Login area start
const loginBtn=document.getElementById("login");
loginBtn.addEventListener("click",function(){
   const loginArea=document.getElementById("login_area");
   
   loginArea.style.display= "none";
    const transactionArea=document.getElementById("transaction-area");
    transactionArea.style.display="block";
})
//Login area end



//transaction area start
//deposit:
const depositBtn=document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function(){
    depositAmount= document.getElementById("deposit-amount").value;
    const depositNumber=parseFloat(depositAmount);

    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);
    document.getElementById("deposit-amount").value="";

})


//withdraw:
const withdrawBtn=document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function(){
    WithdrawAmount= document.getElementById("withdraw-amount").value;
    const withdrawNumber= parseFloat(WithdrawAmount);
    //console.log(withdrawNumber);
    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", (-1)*withdrawNumber);
   
    document.getElementById("withdraw-amount").value="";

})




function updateSpanText(id, inputValue){
    current=document.getElementById(id).innerText;
    currentNumber=parseFloat(current);
    total= currentNumber+inputValue;
    
    document.getElementById(id).innerText=total;

}


