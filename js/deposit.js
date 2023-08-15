// event handle on deposit btn
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get current balance
    const currentBalanceField = document.getElementById('total-balance');
    const currentBalanceValue = currentBalanceField.innerText;
    const currentBalance = parseFloat(currentBalanceValue);
    // get total deposit
    const totalDepositField = document.getElementById('total-deposit');
    const totalDepositValue = totalDepositField.innerText;
    const totalDeposit = parseFloat(totalDepositValue);
    // get new deposit amount
    const newDepositField = document.getElementById('new-deposit');
    const newDepositValue = newDepositField.value;
    const newDepositAmount = parseFloat(newDepositValue);
    // update deposit value
    const totalDepositAmount = totalDeposit + newDepositAmount;
    totalDepositField.innerText = totalDepositAmount;
    // update total balance
    const totalCurrentBalance = newDepositAmount + currentBalance;
    currentBalanceField.innerText = totalCurrentBalance;

    newDepositField.value = "";

})