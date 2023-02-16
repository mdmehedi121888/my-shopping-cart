function quantityUpdate(id, value1) {
  const qunatityString = document.getElementById(id);
  const qunatityStringValue = qunatityString.value;
  console.log(qunatityStringValue);
  let quantityValue = parseInt(qunatityStringValue);

  if (value1 == true) {
    quantityValue += 1;

    qunatityString.value = quantityValue;
  } else {
    quantityValue -= 1;
    if (quantityValue < 0) alert("sorry!!! its not possible");
    else qunatityString.value = quantityValue;
  }
  return quantityValue;
}

function calculatePrice(id, quantity, value) {
  const result = quantity * value;
  const idFind = document.getElementById(id);
  idFind.innerText = result;
  return result;
}

function subTotal(value, identity) {
  const subTotal = document.getElementById("subtotal");
  if (identity == true) subTotal.innerText = value;
  else {
    const mobilePrice = document.getElementById('mobile-price');
    const mobilePriceString = mobilePrice.innerText;
    const mobilePriceValue = parseInt(mobilePriceString);
    const currentSubtotal = mobilePriceValue + value;
    subTotal.innerText = currentSubtotal;
  }
}

function tax(){
    const tax = document.getElementById('tax');
    const subtotal = document.getElementById('subtotal');
    const subtotalString = subtotal.innerText;
    const subtotalValue = parseInt(subtotalString);
    const taxvalue =(subtotalValue*0.1).toPrecision(2);
    tax.innerText = taxvalue;
}

function total(){
    const tax = document.getElementById('tax');
    const taxString = tax.innerText;
    const taxValue = parseInt(taxString);
    const subtotal = document.getElementById('subtotal');
    const subtotalString = subtotal.innerText;
    const subtotalValue = parseInt(subtotalString);
    const total = document.getElementById('total');
    total.innerText = (taxValue + subtotalValue);
}

document.getElementById("plus-btn").addEventListener("click", function () {
  const quantity = quantityUpdate("quantity", true);
  const mobilePrice = calculatePrice("mobile-price", quantity, 129);
  subTotal(mobilePrice, true);
  tax();
  total();
});

document.getElementById("minus-btn").addEventListener("click", function () {
  const quantity = quantityUpdate("quantity", false);
  if (quantity >= 0) {
    const mobileReducePrice = calculatePrice("mobile-price", quantity, 129);
    subTotal(mobileReducePrice, true);
    tax();
    total();
  }
 
});
document
  .getElementById("cover-plus-btn")
  .addEventListener("click", function () {
    const quantity = quantityUpdate("cover-quantity", true);
    const coverPrice = calculatePrice("cover-price", quantity, 29);
    subTotal(coverPrice,false);
    tax();
    total();
  });

document
  .getElementById("cover-minus-btn")
  .addEventListener("click", function () {
    const quantity = quantityUpdate("cover-quantity", false);
    if (quantity >= 0) {
      const coverReducePrice = calculatePrice("cover-price", quantity, 29);
      subTotal(coverReducePrice,false);
      tax();
      total();
    }
  });

//   document.getElementById('remove-item-1').addEventListener('click',function(){
//     const item1 = document.getElementById('remove-item-1').parentNode;
//     // this.removeChild(item1);
//     console.log(item1);
//     const chill = item1.parentNode;
//     this.removeChild(chill);
//     console.log(item1.parentNode);
//     console.log(item1.parentNode.parentNode);
//     const child = item1.parentNode.parentNode.parentNode;
//     console.log(child);
//     this.removeChild(child);
//   })
