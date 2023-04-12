import "./1.css";
function fn(a) {
  return a + 1;
}
window.sss = fn;
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    console.log("click");
    const a = window.sss(1);
    console.log(a);
  });
});
