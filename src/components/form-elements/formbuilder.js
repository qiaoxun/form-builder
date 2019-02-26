import Vue from 'vue';
import draggable from 'vuedraggable';

import checkbox_controller from './Checkbox';
import button_controller from './Buttons';

export const FormBuilder = new Vue({
  components: {
    draggable,
    checkbox_controller,
    button_controller
  },
  data () {
    return {
      fields: [
        {
          name: "checkbox_controller",
          text: "checkbox_controller",
          group: "form",
          hasOptions: "true",
          isRequired: "false"
        },
        {
          name: "button_controller",
          text: "button_controller",
          group: "form",
          hasOptions: "true",
          isRequired: "false"
        }
      ]
    }
  }
});
