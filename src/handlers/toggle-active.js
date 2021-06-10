/**
 * @param {Event} e - The event triggered when the user clicks the button.
 */

export const toggleActive = (e) => {
  const target = e.currentTarget;
  if (e.propertyName.includes("flex")) {
    target.classList.toggle("open-active");
  }
};
