const currencyFirstEl = document.getElementById("currency-first")
const worthFirstEl = document.getElementById("worth-first")

const currencySecondEl = document.getElementById("currency-second")
const worthSecondEl = document.getElementById("worth-second")

const exchangeRateEl = document.getElementById("exchange-rate")

updateRate()

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/8c4c5a29837fa37876ec259e/latest/${currencyFirstEl.value}`).then((res) =>res.json()).then((data)=>{const rate = data.conversion_rates[currencySecondEl.value]; 
    exchangeRateEl.innerText = `1 ${currencyFirstEl.value} =  ${rate + " " + currencySecondEl.value}`; worthSecondEl.value = (worthFirstEl.value*rate).toFixed(4)}) 
}

currencyFirstEl.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate) // could also have used "change"