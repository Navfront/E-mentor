const tlBlocks = document.querySelectorAll(".toggle-list__block");
if (tlBlocks) {
  try {
    tlBlocks.forEach((el) => {
      el.addEventListener("click", () => {
        el.classList.toggle("toggle-list__block--opened");
      });
    });
  } catch (e) {
    console.log(e);
  }
}
