const input = document.querySelector("#todo");
const formAdd = document.querySelector(".add");
const ulList = document.querySelector(".list-group");
const check = document.querySelectorAll(".check");

// FOR GETTING THE WHITE

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const banner = document.getElementById("banner");
const formControl = document.querySelector(".form-control");
const li = document.querySelectorAll(".list-group-item");
const choice = document.querySelector(".choice");
const btn = document.querySelectorAll(".btn__delete");

//! TOOGLE LIGHT DARK THEME

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");

  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "whitesmoke";
    banner.style.backgroundImage = "url(/images/bg-desktop-light.jpg)";
    formControl.style.background = "white";
    choice.style.background = "white";
  } else {
    body.style.background = " hsl(235, 21%, 11%)";
    banner.style.backgroundImage = "url(/images/bg-desktop-dark.jpg)";
    formControl.style.background = "hsl(235, 24%, 19%)";
    formControl.style.color = "hsl(236, 33%, 92%)";
    choice.style.background = "hsl(235, 24%, 19%)";
  }

  body.style.transition = "1.5s";
  banner.style.transition = "1.5s";

  li.forEach((element) => {
    if (this.classList.contains("bi-brightness-high-fill")) {
      element.style.background = "white";
      element.style.color = "hsl(233, 14%, 35%)";
    } else {
      element.style.background = " hsl(235, 24%, 19%)";
      element.style.color = "hsl(234, 11%, 52%)";
    }
  });

  btn.forEach((btn) => {
    if (this.classList.contains("bi-brightness-high-fill")) {
      btn.style.background = "white";
    } else {
      btn.style.background = "hsl(235, 24%, 19%)";
    }
  });
});

//! CREATING AN ELEMENT

const generateTemplate = (todo) => {
  let theme = "light-theme";
  if (!toggle.classList.contains("bi-brightness-high-fill")) {
    theme = "dark-theme";
  }
  const html = `

  <li class="list-group-item">
              <div class="check">
                <img src="./images/icon-check.svg" />
              </div>
              ${todo}
              <button class="btn__delete">
                <img src="./images/icon-cross.svg" alt="" class="delete" />
              </button>
            </li>


`;

  ulList.innerHTML += html;

  const newLi = ulList.lastChild;

  console.log(newLi);

  if (newLi.classList.contains("bi-brightness-high-fill")) {
    style.background = "white";
  } else {
    style.background = "hsl(235, 24%, 19%)";
  }
};

function addTask(e) {
  e.preventDefault();
  const todo = formAdd.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    formAdd.reset();
  }
}

formAdd.addEventListener("submit", addTask);

//! DELETING A TO DO

function removeTodo(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
}

ulList.addEventListener("click", removeTodo);

//! ADDING THE CHECK LIST

check.forEach((check) => {
  check.addEventListener("click", function () {
    check.classList.toggle("active-check");
  });
});
