import { formValidation } from "@form-validation/core";
// plugins formvalidation.io
import { Declarative } from "@form-validation/plugin-declarative";
import { Icon } from "@form-validation/plugin-icon";

export class Formular {
  constructor(form, url) {
    this.form = form;
    this.url = url;
    this.fv;

    this.form.addEventListener("change", this.updateFormValidation.bind(this));
    this.form.addEventListener("submit", this.submit.bind(this));
  }

  init() {
    /**
     * init Formvalidation
     */
    this.fv = formValidation(this.form, {
      plugins: {
        declarative: new Declarative({
          html5Input: true,
        }),

        icon: new Icon({
          onPlaced: function (e) {
            const parent = e.iconElement.parentNode;
            parent.appendChild(e.iconElement);
          },
        }),
      },
    });
    console.log("init", this.fv);
  }

  updateFormValidation(e) {
    console.log("updateValidation");
    console.log("onChange", this.validate());
  }

  validate() {
    // Validate the form when click on a link or normal button
    console.log(this.fv);
    this.fv.validate().then(function (status) {
      if (status === "Valid") {
        console.log("status", status);
        return true;
      } else {
        console.log("status", status);
        return false;
      }
    });
  }

  submit(event) {
    event.preventDefault();
    var isValid = this.validate();
    console.log(isValid);
    if (isValid) {
      this.form.submit();
    } else {
      alert("form is not valid");
    }
  }
}
