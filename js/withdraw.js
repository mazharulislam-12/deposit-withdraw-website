/*
1.
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdaw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    const withdawTotalElement = document.getElementById('withdaw-total');
    const previousWithdawTotalString = withdawTotalElement.innerText;
    const previousWithdawTotal = parseFloat(previousWithdawTotalString);

    const newWithdrawTotal = previousWithdawTotal + newWithdrawAmount;
    withdawTotalElement.innerText = newWithdrawTotal;

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newBalanceTotal;
    const balanceElement.innerText = newBalanceTotal;
    


});