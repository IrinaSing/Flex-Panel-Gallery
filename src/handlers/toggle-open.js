/**
 * @param {Event} e - The event triggered when the user clicks the button.
 */

export const toggleOpen = (e) => {
  const target = e.currentTarget;
  target.classList.toggle("open");
};
