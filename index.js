let sendButton = document.querySelector("#sendButton");
// let showButton = document.querySelector("#showButton");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let age = document.querySelector("#age");
let tbody = document.querySelector("tbody");
let fullNameData = [];
let lastNameData = [];
let ageData = [];
// showButton.addEventListener("click", renderTable);
sendButton.addEventListener("click", addTodo);
// window.onkeydown = function (e) {
//   if (e.key === "Enter") {
//     addTodo();
//   }
// };
function addTodo(e) {
  e.preventDefault();
  fullNameData = [...fullNameData, firstName.value];
  lastNameData = [...lastNameData, lastName.value];
  ageData = [...ageData, age.value];
  if (
    firstName.value.trim().length === 0 ||
    lastName.value.trim().length === 0 ||
    age.value.length === 0
  ) {
    alert("You didn't do the filling correctly!");
    return;
  }
  firstName.value = "";
  lastName.value = "";
  age.value = "";
  renderTable();
}
function renderTable() {
  let tr = document.createElement("tr");
  tbody.appendChild(tr);
  tr.innerHTML = `
    <th scope="row">${fullNameData.length}</th>
    <td>${fullNameData.at(-1)}</td>
    <td>${lastNameData.at(-1)}</td>
    <td>${ageData.at(-1)}</td>
    `;
}
