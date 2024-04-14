function GetInputValue(InputId){
    const inputField = document.getElementById(InputId)
    const inputFieldValueString = inputField.value
    const inputFiledValue = parseFloat(inputFieldValueString)
    inputField.value = ''
      return inputFiledValue 
}

function GetElementById(InputId){
    const element = document.getElementById(InputId)
    const elementFieldValueString = element.innerText
    const Value = parseFloat(elementFieldValueString)
    return Value
}

function setElementValueById(elementId,newValue){
const textElement = document.getElementById(elementId)
textElement.innerText = newValue
}
