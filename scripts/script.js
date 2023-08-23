window.addEventListener("load", loadFunction);

function loadFunction() {
  const form = document.querySelector("form");

  const activityHolderContainer = document.querySelector(".activity-holder");

  const input = document.getElementById("inputmain");

  const clearButton = document.getElementById("clear");

  const organizeButton = document.getElementById("organize");

  const filterButton = document.getElementById("filter");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let todoInput = input.value;
    input.value = "";

    if (!todoInput) {
      alert("You have to make a Plan!");
      return;
    }

    let activityHolder = document.createElement("div");

    activityHolder.classList.add("activities");

    let createInput = document.createElement("input");

    createInput.readOnly = true;

    createInput.classList.add("inputClass2");

    createInput.type = "text";

    let createButton = document.createElement("button");

    createButton.classList.add("buttonClass");

    createButton.innerText = "Edit";

    createButton.style.backgroundColor = "goldenrod";

    let createButton2 = document.createElement("button");

    createButton2.classList.add("buttonClass");

    createButton2.innerText = "Delete";

    createButton2.style.backgroundColor = "red";

    let createCheckBox = document.createElement("input");

    createCheckBox.type = "checkbox";

    createCheckBox.classList.add("cbox");

    activityHolderContainer.appendChild(activityHolder);
    activityHolder.appendChild(createCheckBox);
    activityHolder.appendChild(createInput);
    activityHolder.appendChild(createButton);
    activityHolder.appendChild(createButton2);
    createInput.value = todoInput;

    createButton.addEventListener("click", () => {
      if (createButton.innerText == "Edit") {
        createButton.innerText = "Save";
        createInput.readOnly = false;
        createButton.style.backgroundColor = "limegreen";
      } else {
        createButton.innerText = "Edit";
        createInput.readOnly = true;
        createButton.style.backgroundColor = "goldenrod";
      }
    });

    createButton2.addEventListener("click", () => {
      activityHolder.remove();
    });

    createCheckBox.addEventListener("change", () => {
      if (createCheckBox.checked == false) {
        console.log("oooo");
        createButton.style.display = "initial";
        createInput.style.textDecoration = "initial";
        createInput.style.color = "white";
        createInput.style.borderColor = "white";
      } else {
        if (createButton.innerText == "Edit") {
          console.log("Checkbox is checked!");
          createInput.style.textDecoration = "line-through 1px";
          createInput.style.color = "rgba(255, 255, 255, 0.7)";
          createInput.style.borderColor = "limegreen";
          createButton.style.display = "none";
          createCheckBox.checked = true;
        } else if (createButton.innerText == "Save") {
          createCheckBox.checked = false;
          alert("PLEASE SAVE!");
        } else {
          console.log("!!");
        }
      }
    });

    clearButton.addEventListener("click", () => {
      activityHolderContainer.innerHTML = "";
      console.log("cleared");
    });

    organizeButton.addEventListener("click", () => {
      if (createCheckBox.checked == true) {
        activityHolderContainer.appendChild(activityHolder);
      }
    });

    filterButton.addEventListener("click", () => {
      if (createCheckBox.checked == true) {
        activityHolder.innerHTML = "";
      }
    });
  });
}
