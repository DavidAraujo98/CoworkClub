<template>
  <div class="list-item-container" v-bind:class="rootClassName">
    <div class="list-item-container1">
      <h5 class="list-item-text headingThree">{{ space }}</h5>
      <h3 class="list-item-text1">{{ price }} €</h3>
    </div>
    <div class="list-item-container2">
      <div class="list-item-container3">
        <span class="list-item-text2">{{ checkin }}</span>
        <span class="list-item-text3"><span>to</span></span>
        <span class="list-item-text5">{{ checkout }}</span>
      </div>
      <span class="list-item-text6">{{ office }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    office: {
      type: String,
      default: 'Hot Desk',
    },
    checkout: {
      type: String,
      default: '15 June',
    },
    checkin: {
      type: String,
      default: '12 June',
    },
    rootClassName: String,
    space: {
      type: String,
      default: 'Title',
    },
    price: {
      type: String,
      default: '30',
    },
  },
}
</script>

<style scoped>
.list-item-container {
  flex: 0 0 auto;
  margin: var(--dl-space-space-unit);
  display: flex;
  padding: 1rem;
  max-width: auto;
  min-width: 300px;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius40);
  flex-direction: column;
}
.list-item-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.list-item-text {
  color: var(--dl-color-secondary-700);
  margin-bottom: 0px;
}
.list-item-text1 {
  color: var(--dl-color-primary-700);
}
.list-item-container2 {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.list-item-container3 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.list-item-text2 {
  color: var(--dl-color-secondary-600);
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
}
.list-item-text3 {
  margin-top: 0px;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: 0px;
}
.list-item-text5 {
  color: var(--dl-color-secondary-600);
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
}
.list-item-text6 {
  color: var(--dl-color-secondary-600);
  margin-top: 0px;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: 0px;
}

@media(max-width: 479px) {
  .list-item-root-class-name {
    max-width: 100%;
  }
}
</style>
