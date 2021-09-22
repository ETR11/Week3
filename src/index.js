import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
  //dogPics();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
    //dogPics();
  });
}

function initializeCode() {
  const breeds = ["husky", "shiba", "corgi", "terrier", "dachshund"];
  for (let i = 0; i < 5; i++) {
    const container = document.getElementById("dogs");
    let item = document.createElement("div");
    item.className = "wiki-item";
    let header = document.createElement("h1");
    header.className = "wiki-header";
    header.innerHTML = breeds[i];
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
    dogPics(img, breeds[i]);
    //img.src = "";
    container.appendChild(item);
    item.appendChild(header);
    item.appendChild(content);
    content.appendChild(text);
    content.appendChild(imgCont);
    imgCont.appendChild(img);
  }
}

async function dogPics(img, dogo) {
  await fetch("https://dog.ceo/api/breed/" + dogo + "/images/random")
    .then((res) => res.json())
    .then((info) => {
      img.src = info.message;
      console.log(info.message);
    });
  /*let response = await fetch("https://dog.ceo/api/breed/hound/images");
  let dogos = await response.json();

  console.log(dogos);*/
}
