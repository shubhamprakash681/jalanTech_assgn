let form = document.getElementById("form");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  let inp = document.getElementById("array_input").value;

  // console.log(form);
  console.log(inp);

  let arr = inp.split(",").map(Number);
  let len = arr.length;
  console.log(arr);

  let index = 0;
  while (index < len - 1) {
    let element = arr.pop();
    arr.splice(index, 0, element);

    index += 2;
  }
  console.log(arr);

  document.getElementById("result").innerText = "[" + arr + "]";
});
