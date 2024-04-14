document.getElementById('Withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = GetInputValue('Withdraw-field')

    if (newWithdrawAmount < 0) {
        alert('Please should type a positive numbers')
        return
    }
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a numbers')
        return
    }
    const elementText = GetElementById('Withdraw-amount')
    const balance = GetElementById('Balance')
    const total_amount = newWithdrawAmount + elementText
    const total_balance = balance - newWithdrawAmount
    if ( newWithdrawAmount > balance) {
        alert('you have limited access')
        return
    }
    elementText.innerText = setElementValueById("Withdraw-amount", total_amount)
    balance.innerText = setElementValueById("Balance", total_balance)
})