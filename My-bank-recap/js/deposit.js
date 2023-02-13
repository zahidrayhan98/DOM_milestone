//   step-1: add event handler ////
// step-2 : get amount from the input field ////
// step-3 : clear the value/////
/// step-4 : add the deposit total///
/// step-6 : get balance set////
//// step-7 : get the new balance///



//  step-1 ////

document.getElementById('btn-deposit').addEventListener('click' , function (){
    const depositField =document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount =parseFloat(newDepositAmountString);

    // step-3//////
    depositField.value ='';
    // step -4 /////
     const depositTotalElement =document.getElementById('deposit-total');
     const previousTotalDepositString = depositTotalElement.innerText;
     const previousTotalDeposit = parseFloat(previousTotalDepositString);

    //  step-5 /////
    const newDepositTotal =previousTotalDeposit + newDepositAmount;

    depositTotalElement.innerText = newDepositTotal;

////// step-6 /////
    const PreviousTotalBalanceAmount =document.getElementById('balance-total');
    const previousTotalAmountString = PreviousTotalBalanceAmount.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);

/////step-7/////
   const currentTotalBalance = previousTotalAmount + newDepositAmount;
   PreviousTotalBalanceAmount.innerText = currentTotalBalance;
    
})