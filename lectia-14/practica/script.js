// https://web.dev/articles/browser-level-image-lazy-loading
// const outputScrollStandard = document.getElementById("outputScrollStandard");
// const outputScrollThrottling = document.getElementById(
//   "outputScrollThrottling"
// );

// const object = {
//   standard: 0,
//   throttle: 0,
// };

// const functionStandard = () => {
//   object.standard += 1;
//   outputScrollStandard.textContent = object.standard;
// };

// document.addEventListener("keydown", functionStandard);

// const seconds = 5;

// document.addEventListener(
//   "keydown",
//   _.throttle(() => {
//     object.throttle += 1;
//     outputScrollThrottling.textContent = object.throttle;
//   }, seconds * 1000)
// );

// ------------------------------------------------------------------------------------------------------------

// const outputResizeStandard = document.getElementById("outputResizeStandard");
// const outputResizeThrottling = document.getElementById(
//   "outputResizeThrottling"
// );
// const outputResizeDebounce = document.getElementById("outputResizeDebounce");

// const object = {
//   standard: 0,
//   throttle: 0,
//   debounce: 0,
// };

// const functionStandard = () => {
//   object.standard += 1;
//   outputResizeStandard.textContent = object.standard;
// };

// window.addEventListener("resize", functionStandard);

// const seconds = 5;

// window.addEventListener(
//   "resize",
//   _.throttle(() => {
//     object.throttle += 1;
//     outputResizeThrottling.textContent = object.throttle;
//   }, seconds * 1000)
// );

// window.addEventListener(
//   "resize",
//   _.debounce(() => {
//     object.debounce += 1;
//     outputResizeDebounce.textContent = object.debounce;
//   }, seconds * 1000)
// );

const CORRECT_INPUT_LENGTH = {
  min: 8,
  max: 16,
};

const CLASS_NAMES = {
  wrong: "wrong",
  correct: "correct",
};

const signinForm = document.getElementById("signInForm");
const handleInputValidation = ({ target }) => {
  console.dir(target);
  const isValid =
    target.value.length > CORRECT_INPUT_LENGTH.min &&
    target.value.length < CORRECT_INPUT_LENGTH.max;

  if (isValid) {
    target.classList.add(CLASS_NAMES.correct);
    target.classList.remove(CLASS_NAMES.wrong);
  } else {
    target.classList.add(CLASS_NAMES.wrong);
    target.classList.remove(CLASS_NAMES.correct);
  }
};
signinForm.addEventListener("input", _.debounce(handleInputValidation, 3000));
