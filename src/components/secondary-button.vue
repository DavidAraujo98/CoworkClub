<template>
  <div class="secondary-button-container" v-bind:class="rootClassName">
    <button
      class="secondary-button-button button buttonSmall"
      @click="pushed"
      :type="type"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "SecondaryButton",
  methods: {
    pushed() {
      this.$emit("pushed");
    },
  },
  props: {
    rootClassName: String,
    type: {
      type: String,
      default: "submit",
    },
    text: {
      type: String,
      default: "Button",
    },
  },
};
</script>

<style scoped>
.secondary-button-container {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.secondary-button-button {
  color: var(--dl-color-gray-white);
  outline: none;
  align-self: stretch;
  background: linear-gradient(310deg, #141727, #3a416f);
  box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
  text-align: center;
  transition: all 0.15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-doubleunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-doubleunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
}
.secondary-button-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
</style>
