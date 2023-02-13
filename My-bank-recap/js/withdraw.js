

document.getElementById('btn-withdraw').addEventListener('click' , function (){
    const withdrawField =document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
   
    withdrawField.value ='';

    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawAmount =parseFloat(previousWithdrawString);
    
    const newWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    withdrawTotalElement.innerText = newWithdrawAmount;

    const balanceAmountElement =document.getElementById('balance-total');
    const previousBalanceString = balanceAmountElement.innerText;
    const previousBalance =parseFloat(previousBalanceString);
     
    const newBalanceAmount =previousBalance - withdrawAmount;
    balanceAmountElement.innerText= newBalanceAmount;

})