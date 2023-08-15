/*
1. add event listener to the deposit button
2. get deposit amount from the deposit input field
2.5: convert string deposit amount to a number type
3.clear input field 
4. get the previous deposit total 
5. calculate new deposit total and set the value to the deposit total


*/
document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal + newDepositTotal;
    depositTotalElement.innerText = newDepositTotal;
    
})
