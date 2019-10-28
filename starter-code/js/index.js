

// anything that require the html file to load before it runs will go inside of this window.onload 
// if you are not sure then just add everything
window.onload = ()=> {
  var $cart = document.querySelector('#cart tbody');
  var $calc = document.getElementById('calc');

  function updateSubtot($product) {
    // Iteration 1.1
  }

  function calcAll() {
    // Iteration 1.2
  }
  $calc.onclick = calcAll;
}