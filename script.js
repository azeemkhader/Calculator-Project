document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;
  const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '=', 'Enter','Backspace'];

  if (allowedKeys.includes(key)) {
    if (key === '=') {
      // Perform calculation and display the result
      result();
    } else if (key === 'Enter') {
      // Handle the Enter key (e.g., perform calculation)
      result();
    }else if(key === 'Backspace'){
        
      const currentValue = document.getElementById("display_screen").value;
      document.getElementById("display_screen").value = currentValue.slice(0, -1);

    }
     else {
      // Display the pressed key in the calculator
      displayNum(key);
    }
  }
}
function displayNum(val){
    document.getElementById("display_screen").value=  document.getElementById("display_screen").value+val;



}
function clearNum(){
    document.getElementById("display_screen").value=""

}
function result(){

    var statement = document.getElementById("display_screen").value
    var result = eval(statement)
    document.getElementById("display_screen").value = result

}


