const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
// console.log(formSteps);

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});
if (currentStep < 0) {
  currentStep = 0;
  formSteps[currentStep].classList.add("active");
}
