import timer from "./modules/timer.js";
import menu from './modules/menu.js'
import modal from "./modules/modal.js";
import calc from "./modules/calc.js";
import forms from "./modules/forms.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import sendForm from "./modules/sendForm.js";

timer('25 may 2026')
menu()
modal()
calc(100)
forms()
tabs()
slider()
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
})
sendForm({
  formId: 'form2',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
})
sendForm({
  formId: 'form3',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
})