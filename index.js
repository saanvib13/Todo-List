window.addEventListener("load", () => {
  const form = document.querySelector("#form-add");
  const input = document.querySelector(".add");
  const list_el = document.querySelector(".list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //prevents from refreshing after submission

    const task = input.value;
    if (!task) {
      alert("please enter the task");
      return;
    }

    const todo = {
      done: false,
    };
    // TASKS TO BE COMPLETED LIST //

    // TOP DIV
    const content = document.createElement("div");
    content.classList.add("content");

    // CHECK BOX DIV
    const checkdiv = document.createElement("div");
    checkdiv.classList.add("checkdiv");

    //CHECK BOX LABEL
    const t_label = document.createElement("label");

    //CHECK BOX INPUT

    const t_input1 = document.createElement("input");
    t_input1.type = "checkbox";
    t_input1.checked = todo.done;

    //CHECK BOX SPAN

    const span = document.createElement("span");
    span.classList.add("check");

    t_label.appendChild(t_input1);
    t_label.appendChild(span);

    checkdiv.appendChild(t_label);

    // TASK LIST DIV
    const t_el = document.createElement("div");
    t_el.classList.add("mytask");
    //TASKS
    const t_input2 = document.createElement("input");
    t_input2.type = "text";
    t_input2.value = task;
    t_input2.classList.add("text");
    t_input2.setAttribute("readonly", "readonly");

    t_el.appendChild(t_input2);

    checkdiv.appendChild(t_el);
    content.appendChild(checkdiv);
    list_el.appendChild(content);

    // TASK BUTTONS //

    const t_action = document.createElement("div");
    t_action.classList.add("actions");

    const t_button1 = document.createElement("button");
    t_button1.classList.add("edit");
    t_button1.innerHTML = "Edit";

    t_action.appendChild(t_button1);
    content.appendChild(t_action);
    list_el.appendChild(content);

    input.value = "";

    //Buttons functioning
    t_button1.addEventListener("click", () => {
      if (t_button1.innerText.toLowerCase() === "edit") {
        t_input2.removeAttribute("readonly");
        t_input2.focus();
        t_button1.innerText = "Save";
      } else {
        t_input2.setAttribute("readonly", "readonly");
        t_button1.innerHTML = "Edit";
      }
    });
    var t_button2 = document.createElement("button");
    t_button2.classList.add("delete");
    t_button2.innerText = "Remove";
    span.addEventListener("click", () => {
      if (t_input1.checked === false) {
        console.log(t_input1.checked);
        content.classList.add("done");
        t_action.appendChild(t_button2);
        t_button2.addEventListener("click", () => {
          list_el.removeChild(content);
        });
      } else {
        content.classList.remove("done");
        t_action.removeChild(t_button2);
      }
    });
  });
});
