let ico = [];
const buttonText = "FinStat";
const buttonUrl = "https://finstat.sk/";
const buttonTitle = "Otvoriť na Finstate na novom okne";
const buttonStyle = ".fin-rsr-button, .fin-rsr-button:visited {color: #32D992;text-decoration: none;background-color: #434040;font-weight: normal;padding: 5px 10px;border-radius: 5px;margin: 0 5px;} .fin-rsr-button:hover {color: #32D992;background-color: #615d5d;transition: all 0.3s ease-in-out;cursor: pointer;}";

// fighting the legacy table design
const tableCells = Array.from(document.getElementsByClassName("ra"));
if (tableCells.length === 0) {
  throw new Error("Table cells not found");
}

// 8 digits? must be an ICO
ico = tableCells.filter((cell) =>
  /^\d{8}$/.test(cell.innerHTML.replaceAll(" ", ""))
);

// if we got only one element, we can proceed
if (ico.length !== 1) {
  throw new Error("ICO not found or multiple found");
}

// the element and the ICO number
const icoElement = ico[0];
const icoValue = icoElement.innerHTML.replaceAll(" ", "");

// create the button
const button = document.createElement("a");
button.classList.add("fin-rsr-button");
const linkText = document.createTextNode(buttonText);
button.appendChild(linkText);
button.title = buttonTitle;
button.href = buttonUrl + icoValue;
button.setAttribute("target", "_blank");
icoElement.appendChild(button);

// make it pretty
const style = document.createElement("style");
style.innerText = buttonStyle;
icoElement.appendChild(style);
