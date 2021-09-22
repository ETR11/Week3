import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  for (let i = 0; i < 5; i++) {
    const container = document.getElementsByClassName("container");
    let item = document.createElement("div");
    item.className = "wiki-item";
    let header = document.createElement("h1");
    header.className = "wiki-header";
    header.innerHTML = "Breed X";
    let content = document.createElement("div");
    content.className = "wiki-content";
    let text = document.createElement("p");
    text.className = "wiki-text";
    text.innerHTML = (Math.random() + 1).toString(2).substring(2);
    let imgCont = document.createElement("div");
    imgCont.className = "img-container";
    let img = document.createElement("img");
    img.className = "wiki-img";
    img.src = "";
    container[0].appendChild(item);
    item.appendChild(header);
    item.appendChild(content);
    content.appendChild(text);
    content.appendChild(imgCont);
    imgCont.appendChild(img);
  }
}
