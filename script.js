const CONTAINER = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
  let div = document.createElement("div");
  div.className = "box";
  CONTAINER.appendChild(div);
}
