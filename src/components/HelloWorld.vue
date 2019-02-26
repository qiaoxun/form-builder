<template>
  <v-app>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
    <v-flex xs6 dark>
      <draggable class="list-group" element="div" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
        <div v-for="form in list">
          <component :is="form.name">
          </component>
        </div>
      </draggable>
    </v-flex>

    <v-flex xs6>
      <draggable class="list-group" element="div" v-model="list2" :options="dragOptions" :move="onMove">
        <div v-for="form in list2" :key="form.name">
          <component :is="form.name">
          </component>
        </div>
      </draggable>
    </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
import { FormBuilder } from "./form-elements/formbuilder";
console.log(FormBuilder.$options.data().fields)

export default {
  components: FormBuilder.$options.components,
  data() {
    return {
      list: FormBuilder.$options.data().fields,
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  }
}
</script>

<style>

</style>
