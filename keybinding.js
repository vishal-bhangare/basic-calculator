const actions = document.querySelectorAll(".buttons .action");
const numbers = document.querySelectorAll(".buttons .number");

window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return;
    }
    switch (event.key) {
      case "Backspace":
        actions[1].click();
        break;
      case "Clear":
        actions[0].click();
        break;
      case "+":
        actions[6].click();
        break;
      case "-":
        actions[5].click();
        break;
      case "*":
        actions[4].click();
        break;
      case "/":
        actions[3].click();
        break;
      case "Enter":
        actions[7].click();
        break;
      case "0":
        numbers[10].click();
        break;
      case "1":
        numbers[6].click();
        break;
      case "2":
        numbers[7].click();
        break;
      case "3":
        numbers[8].click();
        break;
      case "4":
        numbers[3].click();
        break;
      case "5":
        numbers[4].click();
        break;
      case "6":
        numbers[5].click();
        break;
      case "7":
        numbers[0].click();
        break;
      case "8":
        numbers[1].click();
        break;
      case "9":
        numbers[2].click();
        break;
      case ".":
        numbers[11].click();
        break;
      default:
        return;
    }
    event.preventDefault();
  },
  true
);
