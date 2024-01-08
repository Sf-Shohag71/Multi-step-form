const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
// console.log(formSteps);

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});
if (currentStep < 0) {
  currentStep = 0;
  // formSteps[currentStep].classList.add("active");
  showCurrenStep();
}

multiStepForm.addEventListener("click", (e) => {
  if (e.target.matches("[data-next]")) {
    currentStep += 1;
  } else if (e.target.matches("[data-previous]")) {
    currentStep -= 1;
  }
  showCurrenStep();
});

function showCurrenStep(){
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
    console.log(step, index);
  });
  
};
