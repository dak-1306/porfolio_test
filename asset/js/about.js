const range = document.querySelectorAll(".range");
const upDate = (a) => {
  let min = a.min;
  let max = a.max;
  let value = a.value;
  let percent = ((value - min) / (max - min)) * 100;
  a.style.background = `linear-gradient(to right, #fd6f00 ${percent}%, #edecec ${percent}%)`;
};
console.log(range);
range.forEach((element) => {
  element.addEventListener("input", (e) => {
    console.log(e.target.name);
    upDate(e.target);
  });
});
