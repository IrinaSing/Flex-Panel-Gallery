import { toggleOpen } from "../handlers/toggle-open.js";
import { toggleActive } from "../handlers/toggle-active.js";

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
