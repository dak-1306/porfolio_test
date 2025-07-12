const testimonialFrame = document.querySelectorAll(".testimonial-frame");
const testimonialRectangle = document.querySelectorAll(
  ".testimonial-rectangle"
);
console.log(testimonialFrame);
let index = 0;
setInterval(() => {
  testimonialFrame[index].classList.remove("active-frame");
  testimonialRectangle[index].classList.remove("active-rectangle");
  index = (index + 1) % testimonialFrame.length;
  testimonialFrame[index].classList.add("active-frame");
  testimonialRectangle[index].classList.add("active-rectangle");
}, 3000);
