<template>
  <div class="primary-blue-button-container" v-bind:class="rootClassName">
    <button class="primary-blue-button-button button buttonSmall">
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'PrimaryBlueButton',
  props: {
    rootClassName: String,
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.primary-blue-button-container {
  display: flex;
  position: relative;
}
.primary-blue-button-button {
  color: var(--dl-color-gray-white);
  width: 100%;
  outline: none;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
  text-align: center;
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
}
.primary-blue-button-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.primary-blue-button-root-class-name1 {
  width: 100%;
}
</style>
