

// anything that require the html file to load before it runs will go inside of this window.onload 
// if you are not sure then just add everything
window.onload = ()=> {
  var $cart = document.querySelector('#cart tbody');

  let updateSubTot = document.querySelector("#calc");

  updateSubTot.onclick = function() {
    // used .innerText to get the value of that html code
    let unitPrice = Number(document.querySelector(".pu span").innerText);
    // inputs used .value not .innerHTML or .innerTEXT
    let quantity = Number(document.querySelector(".qty label input").value);
    let subTotal = unitPrice*quantity;
    document.querySelector(".subtot span").innerText = subTotal;
    calcAll()
    /* testing values
    console.log(unitPrice)
    console.log(quantity) 
    console.log(subTotal)
    console.log(document.querySelector(".subtot span").innerHTML)
    */
    return subTotal;
  }




}



function calcAll() {
  // Iteration 1.2
  
  console.log('calc')
}