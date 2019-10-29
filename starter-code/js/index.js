// anything that require the html file to load before it runs will go inside of this window.onload 
// if you are not sure then just add everything
window.onload = ()=> {

  // // this variable points to the button
  // let updateSubTot = document.querySelector("#calc");

  // // once the user clicks on the button this will update the sub-total for one item
  // updateSubTot.onclick = function () {
  //   // get the value of the unit price
  //   // use .innerText to get the value of that html code, always return a string
  //   let unitPrice = Number(document.querySelector(".pu span").innerText);

  //   // get the quantity after user input 
  //   // inputs used .value not .innerHTML or .innerTEXT
  //   let quantity = Number(document.querySelector(".qty label input").value);

  //   // calculate the subtotal
  //   let subTotal = unitPrice*quantity;

  //   // set the value of the sub-total
  //   document.querySelector(".subtot span").innerText = subTotal;

  //   // testing values
  //   // console.log(unitPrice)
  //   // console.log(quantity) 
  //   // console.log(subTotal)
  //   // console.log(document.querySelector(".subtot span").innerHTML)

  //   return subTotal;
  // }









  let calcAll = document.querySelector("#calc");
  console.log(calcAll);

  let rows = document.querySelectorAll(".product");
  console.log(rows);

  calcAll.onclick = function() {
    // get all of the rows with the class product
    let rows = document.querySelectorAll(".product");
    console.log(rows);

    for(let i = 0; i < rows.length; i++) {
      console.log(rows[i]);

      let unitPrice = Number(rows[i].querySelector('.pu > span').innerText);
      let quantity = Number(rows[i].querySelector('.qty > label > input').value);
      let subTotal = rows[i].querySelector('.subtot > span');
      
      subTotal.innerText = quantity * unitPrice;
    }
  }
}
