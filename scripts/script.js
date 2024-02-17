let count = 0;
let totalPrice = 0;
const allBtn = document.querySelectorAll(".add-btn");
for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", function (event) {
    count += 1;
    setInnerText("cart-count", count);
    const myTarget = event.target.parentNode.querySelector("h2").innerText;
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = myTarget;
    // li.appendChild(p);
    const p2 = document.createElement("p");
    const myCost = parseFloat(
      event.target.parentNode.querySelector(".price").innerText
    );
    p2.innerText = myCost + "$";
    // li.appendChild(p2);
const budget = parseFloat(document.getElementById("budget").innerText);
    document.getElementById("selected-place-container").appendChild(li);
    totalPrice += myCost;
    setInnerText("total-cost", totalPrice);
    if (totalPrice > budget) {
      alert("You can not add more");
      totalPrice -= myCost;
      setInnerText("total-cost", totalPrice);
    } else {
      li.appendChild(p);
      li.appendChild(p2);
    }

    calculate_cost("grand-total", myCost);
  });
}

// Reusable Function
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function calculate_cost(elementId, value) {
  const totalCost = parseFloat(document.getElementById(elementId).innerText);
  let sum = totalCost + value;
  setInnerText(elementId, sum);
  const budget = parseFloat(document.getElementById("budget").innerText);
  if (sum > budget) {
    // alert("You can not add more")
    sum -= value;
    setInnerText(elementId, sum);
  }
  return sum;
}

function reduce_operation(elementId, operation, value) {
  const element = document.getElementById(elementId);
  console.log(sum);
}
function grandTotal(propertyName,event) {
  let price = parseFloat(document.getElementById("grand-total").innerText);
  ;
  console.log(price);
  if (propertyName === "bus") {
    price += 100;
    setInnerText("grand-total", price);
    button_operation('bus-btn')
    button_operation2('train-btn')
    button_operation2('flight-btn')
    
  } else if (propertyName === "train") {
    if (price === 0) {
      alert("Price can not be negative");
      price = 0;
      setInnerText("grand-total", price);
    }else{
      price -= 200;
      setInnerText("grand-total", price);
      button_operation('train-btn')
      button_operation2('bus-btn')
      button_operation2('flight-btn')
    }
    
  } else if (propertyName === "flight") {
    price += 500;
    setInnerText("grand-total", price);
    button_operation('flight-btn')
    button_operation2('bus-btn')
    button_operation2('train-btn')
  } else {
    alert("Please select a vehicle");
  }
}
function button_operation(elementId){
  const element = document.getElementById(elementId);
  element.setAttribute('disabled',true)
}
function button_operation2(elementId){
  const element = document.getElementById(elementId);
  element.setAttribute('disabled',false)
}
