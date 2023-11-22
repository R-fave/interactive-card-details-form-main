const holderName = document.getElementById("cardholder")
const cardNum = document.getElementById("cardnumber")
const expMth = document.getElementById("exp-month")
const expYear = document.getElementById("exp-year")
const cvc = document.getElementById("cardcvc")
const submitBtn = document.getElementById("submit-btn")
const validatorColorCng = "border: 1px solid hsl(0, 100%, 66%); transition-timing-function: ease-in-out; transition-duration: 1s"




submitBtn.addEventListener("click", function(){
    validatior()
})


function formatCardNumber() {
    let cardNum = document.getElementById("cardnumber")
    var value = cardNum.value.replace(/\D/g, '');
    var formattedValue = "";
      for (var i = 0; i < value.length; i++) {
        if (i % 4 == 0 && i > 0) {
          formattedValue += " ";
        }
        formattedValue += value[i];
      }
    cardNum.value = formattedValue;
}

function validatior(){
    if(!holderName.value){
        document.getElementById("name-val").textContent = "this field is required"
        holderName.style = validatorColorCng
    }else if(!cardNum.value || cardNum.value.length < 19){
        document.getElementById("num-val").textContent = "enter a valid card number"
        cardNum.style = validatorColorCng
    }else if (!expMth.value || expMth.value > 12 || expMth.value < 1){
        document.getElementById("date-val").textContent = "enter a valid date"
        expMth.style = validatorColorCng
    }else if (!expYear.value || expYear.value < 20 || expYear.value > 29){
        document.getElementById("date-val").textContent = "enter a valid date"
        expYear.style = validatorColorCng
    }else if (!cvc.value || cvc.value.length < 3 || cvc.length > 3){
        document.getElementById("cvc-val").textContent = "enter a valid cvc"
        cvc.style = validatorColorCng
    }
    else{
        render()
        document.getElementById("form-content").innerHTML = `
        <div class="conf-msg">
            <img src="./src/images/icon-complete.svg">
            <p>THANK YOU!</p>
            <p>We've added your card details</p>
          </div>`
          submitBtn.value = "Continue"
    }
}

function render(){
    document.getElementById("card-num").textContent = cardNum.value
    document.getElementById("user-name").textContent = holderName.value
    document.getElementById("card-exp").textContent = `${expMth.value}/${expYear.value}`
    document.getElementById("card-cvc").textContent = cvc.value
}

