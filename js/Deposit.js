// document.title = 'functional Bap ar Bank'

document.getElementById('Deposit-btn').addEventListener('click', function(){
   const newDepositAmount = GetInputValue('Deposit-field')
   if(newDepositAmount < 0){
    alert('Please should type a positive numbers')
       return  
} 
if(isNaN(newDepositAmount)){
    alert('Please provide a numbers')
    return
  } 
   const elementText = GetElementById('Deposit-amount')
   const balance = GetElementById('Balance')
   const total_amount = newDepositAmount + elementText
   const total_balance = newDepositAmount + balance
   elementText.innerText = setElementValueById("Deposit-amount",total_amount)
   balance.innerText = setElementValueById("Balance", total_balance)
})