import { Formular } from "./form/form.js";
document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOMContentLoaded");
  if (document.getElementById("validateForm")) {
    // not working! why?!
    // const { default: Formular } = await import("./form/form.js");
    const form = new Formular(document.getElementById("validateForm"), "/url");
    form.init();
  }
});
