<template>
  <div class="toolbar-container" v-bind:class="rootClassName">
    <div class="toolbar-header">
      <div class="toolbar-container1">
        <h4 class="toolbar-text">{{ text1 }}</h4>
        <input type="number" placeholder="Min" class="toolbar-textinput input" v-model="min_price" min="0"
          @input="() => this.$emit('minprice', min_price)" />
        <label class="toolbar-label">{{ text }}</label>
        <input type="number" placeholder="Max" class="toolbar-textinput1 input" min="0" v-model="max_price"
          @input="() => this.$emit('maxprice', max_price)" />
      </div>
      <div class="toolbar-container2">
        <h4 class="toolbar-text1">{{ text11 }}</h4>
        <input type="checkbox" checked="true" class="toolbar-checkbox" v-model="parking"
          @change="() => this.$emit('parking', parking)" />
      </div>
      <div class="toolbar-container3">
        <select class="toolbar-select" v-model="amenities" @change="() => this.$emit('amenities', amenities)">
          <option value="Amenities" selected>Amenities</option>
          <option value="Coffee">Coffee</option>
          <option value="Snacks">Snacks</option>
          <option value="Zoom Both">Zoom Both</option>
        </select>
      </div>
      <div class="toolbar-container4">
        <h4 class="toolbar-text2">{{ text12 }}</h4>
        <input type="time" placeholder="Checkin" class="toolbar-textinput2 input" v-model="min_hours"
          @input="() => this.$emit('minhours', min_hours)" />
        <label class="toolbar-label1">{{ text2 }}</label>
        <input type="time" placeholder="Checkout" class="toolbar-textinput3 input" v-model="max_hours"
          @input="() => this.$emit('maxhours', max_hours)" />
      </div>
      <div class="toolbar-container5">
        <select class="toolbar-select1" @change="() => this.$emit('type', type)">
          <option value="" selected>Hot Desk</option>
          <option value="Virtual Office">Virtual Office</option>
          <option value="Private Office">Private Office</option>
          <option value="Meeting Room">Meeting Room</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toolbar",

  data() {
    return {
      min_price: null,
      max_price: null,
      parking: false,
      amenities: null,
      min_hours: "00:00",
      max_hours: "23:59",
      type: null,
    };
  },

  props: {
    text: {
      type: String,
      default: "to",
    },
    text2: {
      type: String,
      default: "to",
    },
    text1: {
      type: String,
      default: "Price Range",
    },
    textinput_placeholder: {
      type: String,
      default: "placeholder",
    },
    text11: {
      type: String,
      default: "Parking",
    },
    text12: {
      type: String,
      default: "Access Hours",
    },
    rootClassName: String,
    textinput_placeholder1: {
      type: String,
      default: "placeholder",
    },
  },
};
</script>

<style scoped>
.toolbar-container {
  width: 100%;
  height: 71px;
  margin: var(--dl-space-space-unit);
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.toolbar-header {
  width: 100%;
  display: flex;
  z-index: 3;
  flex-wrap: wrap;
  align-self: center;
  box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
    0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: center;
}
.toolbar-container1 {
  flex: 0 0 auto;
  width: 350px;
  height: 40px;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  padding-left: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: center;
}
.toolbar-text {
  color: var(--dl-color-secondary-500);
  width: 100%;
  font-style: normal;
  text-align: center;
  font-weight: 500;
  margin-left: 0px;
  margin-right: 0px;
}
.toolbar-textinput {
  width: 70%;
  height: 75%;
  padding: var(--dl-space-space-halfunit);
  text-align: right;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius40);
}
.toolbar-label {
  color: var(--dl-color-secondary-500);
  width: 30%;
  align-self: center;
  text-align: center;
  margin-left: 0px;
  margin-right: 0px;
}
.toolbar-textinput1 {
  width: 70%;
  height: 75%;
  padding: var(--dl-space-space-halfunit);
  text-align: right;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius40);
}
.toolbar-container2 {
  width: 110px;
  height: 40px;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  padding-left: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: center;
}
.toolbar-text1 {
  color: var(--dl-color-secondary-500);
  width: 70%;
  font-style: normal;
  text-align: center;
  font-weight: 500;
  margin-left: 0px;
  margin-right: 0px;
}
.toolbar-checkbox {
  margin-left: var(--dl-space-space-halfunit);
}
.toolbar-container3 {
  width: 126px;
  height: 40px;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  padding-left: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: center;
}
.toolbar-select {
  color: var(--dl-color-secondary-500);
  width: 107px;
  border-radius: var(--dl-radius-radius-radius40);
  background-color: transparent;
}
.toolbar-container4 {
  flex: 0 0 auto;
  width: 350px;
  height: 40px;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  padding-left: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: center;
}
.toolbar-text2 {
  color: var(--dl-color-secondary-500);
  width: 100%;
  font-style: normal;
  text-align: center;
  font-weight: 500;
  margin-left: 0px;
  margin-right: 0px;
  text-transform: capitalize;
}
.toolbar-textinput2 {
  width: 90%;
  height: 75%;
  margin-top: var(--dl-space-space-halfunit);
  text-align: right;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius40);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-unit);
}
.toolbar-label1 {
  color: var(--dl-color-secondary-500);
  width: 30%;
  align-self: center;
  text-align: center;
  margin-left: 0px;
  margin-right: 0px;
}
.toolbar-textinput3 {
  width: 90%;
  height: 75%;
  text-align: right;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius40);
}
.toolbar-container5 {
  width: 126px;
  height: 40px;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  padding-left: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: center;
}
.toolbar-select1 {
  color: var(--dl-color-secondary-500);
  width: 107px;
  height: 26px;
  border-radius: var(--dl-radius-radius-radius40);
  background-color: transparent;
}
.toolbar-root-class-name {
  margin-top: 5rem;
}
@media (max-width: 991px) {
  .toolbar-header {
    height: auto;
  }
}
@media (max-width: 767px) {
  .toolbar-header {
    width: 100%;
    height: auto;
    margin-right: 0px;
  }
}
@media (max-width: 479px) {
  .toolbar-header {
    height: auto;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    justify-content: flex-start;
  }
  .toolbar-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .toolbar-container2 {
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .toolbar-container3 {
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .toolbar-container4 {
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .toolbar-container5 {
    margin-bottom: var(--dl-space-space-halfunit);
    justify-content: center;
  }
}
</style>
