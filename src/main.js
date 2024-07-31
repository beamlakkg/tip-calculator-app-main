document.addEventListener('DOMContentLoaded',() => {
const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.btn');
const customTipInput = document.getElementById('customtip');
const peopleInput = document.getElementById('people');
const AmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetButton = document.getElementById('reset');
const errorMessage = document.getElementById('error-message');

let billValue=0.0;
let tipValue= 0.0;
let peopleValue= 1;

function calculateTip(){
    if (peopleValue >=1){
        let tipAmount= (billValue*tipValue)/100/peopleValue;
        let totalAmount=(biillvalue/peopleValue)+tipAmount;
        tipAmountDisplay.textContent = $${tipAmount.toFixed(2)};
        totalAmountDisplay.textContent= $${totalAmount.toFixed(2)};
    }
}
})



































// document.addEventListener('DOMContentLoaded', () => {
//     const billInput = document.getElementById('bill');
//     const tipButtons = document.querySelectorAll('.btn');
//     const customTipInput = document.getElementById('custom-tip');
//     const peopleInput = document.getElementById('people');
//     const tipAmountDisplay = document.getElementById('tip-amount');
//     const totalAmountDisplay = document.getElementById('total-amount');
//     const resetButton = document.getElementById('reset');
//     const errorMessage = document.getElementById('error-message');

//     let billValue = 0.0;
//     let tipValue = 0.0;
//     let peopleValue = 1;