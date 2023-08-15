// event handle on withdraw btn
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get current balance
    const currentBalanceField = document.getElementById('total-balance');
    const currentBalanceValue = currentBalanceField.innerText;
    const currentBalance = parseFloat(currentBalanceValue);
    // get total withdraw
    const totalWithdrawField = document.getElementById('total-withdraw');
    const totalWithdrawValue = totalWithdrawField.innerText
    const totalWithdraw = parseFloat(totalWithdrawValue);
    // get new withdraw amount
    const newWithdrawField = document.getElementById('new-withdraw');
    const newWithdrawValue = newWithdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawValue);
    
    newWithdrawField.value = "";
    // condition for withdraw
    if(newWithdrawAmount > currentBalance){
        alert("Sorry! your account has insufficient balance.");
        return;
    }
    // update Withdraw value
    const totalWithdrawAmount = totalWithdraw + newWithdrawAmount;
    totalWithdrawField.innerText = totalWithdrawAmount;
    // update total balance
    const totalCurrentBalance = currentBalance - newWithdrawAmount;
    currentBalanceField.innerText = totalCurrentBalance;
})