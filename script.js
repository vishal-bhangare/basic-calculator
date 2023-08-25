const result = document.querySelector("#ans");
const operations = document.querySelector("#operations");
operations.value = "";
const keys = document.querySelector(".buttons");
const regex = new RegExp(/^(?:\d*\.)?\d+([\+\-\*\/])(?:\d*\.)?\d+$/);
keys.addEventListener("click", (event) => {
  let target = event.target;
  if (
    target.className.includes("number") ||
    target.className.includes("action")
  ) {
    let keyValue = target.textContent;
    let operation_string = operations.value.trim();
    if (keyValue === "=") {
      if (!regex.test(operation_string)) {
        alert("Invalid input!!!");
        return;
      }

      let calculation_results = calculator(operation_string);
      operation_string = calculation_results;
      result.textContent = `Ans = ${calculation_results}`;
    } else if (keyValue === "AC") {
      operation_string = "";
      result.textContent = "Ans = ";
    } else {
      operation_string = operation_string + keyValue;
    }

    if (target.getAttribute("data-action") == "backspace") {
      console.log();
      operation_string = operation_string.trim();
      operation_string = operation_string.substring(
        0,
        operation_string.length - 1
      );
    }
    operations.value = operation_string;
  }
});

function calculator(operationString) {
  return eval(operationString);
}

//  @vishalbhangare_2022
