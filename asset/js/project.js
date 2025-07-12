import { data } from "/asset/data/projectData.js";
const options = document.querySelectorAll(".option");
const projectFrame = document.querySelector(".project-frame");
function reset(projectFrame) {
  projectFrame.innerHTML = "";
}
function dataBox(dataE) {
  dataE.forEach((element) => {
    const projectBox = document.createElement("div");
    const boxImg = document.createElement("div");
    const img = document.createElement("img");
    const pTitle = document.createElement("p");
    const pDec = document.createElement("p");
    img.src = element.img;
    img.alt = element.title;
    pTitle.innerHTML = element.title;
    pDec.innerHTML = element.dec;
    projectBox.setAttribute("class", "project-box");
    boxImg.setAttribute("class", "box-img");
    boxImg.append(img);
    projectBox.append(boxImg);
    projectBox.append(pTitle);
    projectBox.append(pDec);
    projectFrame.append(projectBox);
    console.log(img);
    console.log(boxImg);
    console.log(projectBox);
  });
}
function checked(e) {
  options.forEach((a) => {
    a.classList.remove("option-checked");
  });
  e.target.classList.add("option-checked");
}

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    reset(projectFrame);
    checked(e);
    if (e.target.value === "All") {
      console.log(e.target.value);
      const dataE = [...data];
      dataBox(dataE);
    } else {
      console.log(e.target);
      console.log(data);
      const dataE = data.filter((item) => item.title === e.target.value);
      console.log(dataE);
      dataBox(dataE);
    }
  });
});
