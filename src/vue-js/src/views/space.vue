<template>
  <div class="space-container">
    <header-logged rootClassName="header-logged-root-class-name1"></header-logged>
    <div class="space-gallery">
      <div class="space-row">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxvZmZpY2V8ZW58MHx8fHwxNjU0NDIwMTA1&amp;ixlib=rb-1.2.1&amp;w=700"
          class="space-image"
        />
        <div class="space-column">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxvZmZpY2V8ZW58MHx8fHwxNjU0NDIwMTA1&amp;ixlib=rb-1.2.1&amp;w=400"
            class="space-image1"
          />
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxvZmZpY2V8ZW58MHx8fHwxNjU0NDIwMTA1&amp;ixlib=rb-1.2.1&amp;w=400"
            class="space-image2"
          />
        </div>
        <div class="space-column1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG9mZmljZXxlbnwwfHx8fDE2NTQ0MjAxMDU&amp;ixlib=rb-1.2.1&amp;w=400"
            class="space-image3"
          />
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxvZmZpY2V8ZW58MHx8fHwxNjU0NDIwMTA1&amp;ixlib=rb-1.2.1&amp;w=400"
            class="space-image4"
          />
        </div>
      </div>
      <div class="space-body">
        <div class="space-left">
          <div class="space-heading">
            <div class="space-container1">
              <h1 class="space-text headingOne">{{ name }}</h1>
              <div class="space-container2">
                <h1 class="space-text01 headingOne">{{ rating }} / 5</h1>
                <span class="space-text02"><span>{{ nReview }} reviews</span></span>
              </div>
            </div>
            <div class="space-container3">
              <h2 class="space-text04">
                {{ location }}
              </h2>
              <div class="space-container4">
                <svg viewBox="0 0 1024 1024" class="space-icon">
                  <path
                    d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"
                  ></path>
                </svg>
                <h4 class="space-text05"><span>Ver no mapa</span></h4>
              </div>
            </div>
          </div>
          <div class="space-description">
            <h2 class="space-text07">Description</h2>
            <span class="space-text08">
              {{ description }}
            </span>
          </div>
          <div class="space-access-hours">
            <h2 class="space-text09">Access Hours</h2>
            <div class="space-hours">
              <div class="space-cells">
                <span class="space-text10">Monday - Friday</span>
                <span class="space-text11">{{ accessHours[0] }}</span>
              </div>
              <div class="space-cells1">
                <span class="space-text12"><span>Saturday</span></span>
                <span class="space-text14">{{ accessHours[1] }}</span>
              </div>
              <div class="space-cells2">
                <span class="space-text15"><span>Sunday</span></span>
                <span class="space-text17">{{ accessHours[2] }}</span>
              </div>
            </div>
          </div>
          <div class="space-pricing-table">
            <h2 class="space-text18"><span>Pricing</span></h2>
            <div class="space-table">
              <div class="space-types">
                <button 
                  class="space-button button"
                  v-for="option in priceTable"
                  :key="option.id"
                  v-bind:value="option.id"
                  @click="selectedOffice=option.id"
                >
                  <span class="space-text20">
                    <span>{{option.name}}</span>
                  </span>
                </button>
              </div>
              <div class="space-prices">
                <div class="space-head">
                  <span class="space-text31">Nº People</span>
                  <span class="space-text32">Duration</span>
                  <span class="space-text33">Price</span>
                  <span class="space-text34">Access Hours</span>
                </div>
                <div 
                    class="space-row-1"
                    v-for="item in priceTable.find(x => x.id == selectedOffice).list"
                    :key="item.id"
                >
                  <span class="space-text35">{{ item.people }}</span>
                  <span class="space-text36">{{ item.duration }}</span>
                  <span class="space-text37">EUR {{ item.price }}</span>
                  <span class="space-text38">{{ item.hours }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="space-amenities">
            <h2 class="space-text39">Amenities</h2>
            <div class="space-container5">
              <span
                class="space-text33"
                v-for="item in amenities"
                :key="item"
                >{{ item }}</span
              >
            </div>
          </div>
        </div>
        <div class="space-right">
          <form class="space-form">
            <h2 class="space-text50">Booking</h2>
            <div class="space-checkin">
              <label class="space-text51"><span>Checkin</span></label>
              <input
                type="datetime-local"
                placeholder="placeholder"
                class="space-textinput input"
                v-model="checkin"
              />
            </div>
            <div class="space-checkout">
              <label class="space-text53"><span>Checkout</span></label>
              <input
                type="datetime-local"
                placeholder="placeholder"
                class="space-textinput1 input"
                v-model="checkout"
              />
            </div>
            <div class="space-office-type">
              <label class="space-text55"><span>Office type</span></label>
              <select
                class="space-select"
                v-model="officetype"
                @change="getName"
                required
              >
                <option
                  v-for="option in priceTable"
                  :key="option.id"
                  v-bind:value="option.id"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
            <div class="space-team-size">
              <label class="space-label"><span>Team Size</span></label>
              <input
                type="number"
                placeholder="Number of elements"
                class="space-textinput2 input"
                v-model="teamsize"
              />
            </div>
            <router-link 
                :to="`book/${id}?name=${name}&checkin=${checkin}&checkout=${checkout}&officetype=${officetype}&office=${office}&teamsize=${teamsize}`"
            >
              <primary-blue-button
                button="Book Now"
                rootClassName="primary-blue-button-root-class-name1"
                class="space-component1"
              ></primary-blue-button>
            </router-link>
          </form>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HeaderLogged from "../components/header-logged";
import PrimaryBlueButton from "../components/primary-blue-button";
import AppFooter from "../components/footer";

export default {
  name: 'Space',
  props: {},
  components: {
    HeaderLogged,
    PrimaryBlueButton,
    AppFooter,
    },

  data() {
    return {
      id: "",
      name: "",
      rating: "",
      nReview: "",
      description: "",
      location: "",
      accessHours: null,
      priceTable: [],
      selectedOffice: 0,
      amenities: [],
      checkin: "",
      checkout: "",
      office: "",
      officetype: "",
      teamsize: 1,
    };
  },

  methods: {
    getName() {
      this.office = this.priceTable.filter(
        (x) => x.id == this.officetype
      )[0].name;
    },
  },

  beforeMount() {
    fetch(
      "http://localhost:3000/spaces/" +
        window.location.pathname.split("/").pop()
    )
      .then((res) => res.json())
      .then((data) => {
        this.id = window.location.pathname.split("/").pop();
        this.name = data.name;
        this.rating = data.rating;
        this.nReview = data.nReview;
        this.description = data.description;
        this.location = data.location;
        this.accessHours = data.accessHours;
        this.priceTable = data.priceTable;
        this.selectedOffice = this.priceTable[0].id;
        this.amenities = data.amenities;
      });

    
  },

  metaInfo: {
    title: "Space - CoworkClub",
    meta: [
      {
        property: "og:title",
        content: "Space - CoworkClub",
      },
    ],
  },
}
</script>

<style scoped>
.space-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.space-gallery {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  max-width: 1320px;
  align-self: center;
  margin-top: 10vh;
  min-height: auto;
  align-items: center;
  padding-top: 0px;
  margin-bottom: 10vh;
  flex-direction: column;
  justify-content: flex-start;
}
.space-row {
  flex: initial;
  width: 1453px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.space-image {
  width: 661px;
  height: 500px;
  object-fit: cover;
}
.space-column {
  flex: auto;
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.space-image1 {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.space-image2 {
  width: 100%;
  height: 217px;
  object-fit: cover;
}
.space-column1 {
  flex: auto;
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.space-image3 {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.space-image4 {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.space-body {
  width: auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  align-self: flex-start;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
}
.space-left {
  flex: 1;
  width: auto;
  margin: var(--dl-space-space-unit);
  display: flex;
  max-width: 100%;
  min-width: 70%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.space-heading {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.space-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.space-text {
  text-align: center;
  background-image: linear-gradient(310deg,#7928ca,#ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.space-container2 {
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  flex-direction: row;
  justify-content: flex-start;
}
.space-text01 {
  color: var(--dl-color-primary-700);
  width: auto;
  text-align: center;
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: 0px;
}
.space-text02 {
  color: var(--dl-color-secondary-500);
}
.space-container3 {
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.space-text04 {
  color: var(--dl-color-secondary-700);
  margin-right: var(--dl-space-space-unit);
}
.space-container4 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.space-icon {
  width: 24px;
  height: auto;
  align-self: flex-start;
}
.space-text05 {
  color: var(--dl-color-primary-700);
  height: auto;
  align-self: center;
  margin-right: var(--dl-space-space-unit);
}
.space-description {
  display: flex;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.space-text07 {
  color: var(--dl-color-secondary-500);
}
.space-text08 {
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.space-access-hours {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.space-text09 {
  color: var(--dl-color-secondary-500);
}
.space-hours {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  border-color: var(--dl-color-gray-800);
  border-width: 1px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unit);
  justify-content: space-between;
}
.space-cells {
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: 0px;
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
}
.space-text10 {
  color: var(--dl-color-primary-500);
  height: 100%;
}
.space-text11 {
  height: 100%;
}
.space-cells1 {
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: 0px;
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
}
.space-text12 {
  color: var(--dl-color-primary-500);
  height: 100%;
}
.space-text14 {
  height: 100%;
}
.space-cells2 {
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: 0px;
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
}
.space-text15 {
  color: var(--dl-color-primary-500);
  height: 100%;
}
.space-text17 {
  height: 100%;
}
.space-pricing-table {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.space-text18 {
  color: var(--dl-color-secondary-500);
  width: 100%;
}
.space-table {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  border-color: var(--dl-color-gray-800);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius40);
  flex-direction: column;
  justify-content: space-between;
}
.space-types {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unit);
  justify-content: space-around;
  margin-bottom: 0.5rem;
}
.space-button {
  color: var(--dl-color-primary-100);
  font-size: 1.2rem;
  padding-top: 0px;
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: 0px;
  background-color: var(--dl-color-gray-900);
}
.space-text20 {
  color: var(--dl-color-primary-500);
}
.space-button1 {
  color: var(--dl-color-primary-100);
  font-size: 1.2rem;
  padding-top: 0px;
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: 0px;
  background-color: var(--dl-color-gray-900);
}
.space-text23 {
  color: var(--dl-color-primary-500);
}
.space-button2 {
  color: var(--dl-color-primary-100);
  font-size: 1.2rem;
  padding-top: 0px;
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: 0px;
  background-color: var(--dl-color-gray-900);
}
.space-text25 {
  color: var(--dl-color-primary-500);
}
.space-button3 {
  color: var(--dl-color-primary-100);
  font-size: 1.2rem;
  padding-top: 0px;
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: 0px;
  background-color: var(--dl-color-gray-900);
}
.space-text28 {
  color: var(--dl-color-primary-500);
}
.space-prices {
  width: 100%;
  display: flex;
  align-items: stretch;
  margin-left: 0px;
  border-color: var(--dl-color-gray-800);
  border-width: 1px;
  margin-right: 0px;
  padding-left: 0px;
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: 0px;
  flex-direction: column;
}
.space-head {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unit);
  justify-content: space-between;
}
.space-text31 {
  color: var(--dl-color-secondary-500);
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-halfunit);
}
.space-text32 {
  color: var(--dl-color-secondary-500);
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
}
.space-text33 {
  color: var(--dl-color-secondary-500);
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
}
.space-text34 {
  color: var(--dl-color-secondary-500);
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
}
.space-row-1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unit);
  justify-content: space-between;
}
.space-text35 {
  color: var(--dl-color-secondary-400);
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-halfunit);
}
.space-text36 {
  color: var(--dl-color-secondary-400);
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
}
.space-text37 {
  color: var(--dl-color-secondary-400);
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
}
.space-text38 {
  color: var(--dl-color-secondary-400);
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-radius40);
}
.space-amenities {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.space-text39 {
  color: var(--dl-color-secondary-500);
}
.space-container5 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
}
.space-text40 {
  min-width: auto;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.space-text42 {
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.space-text44 {
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.space-text46 {
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.space-text48 {
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.space-right {
  margin: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.space-form {
  width: 100%;
  height: auto;
  padding: var(--dl-space-space-unit);
  position: relative;
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-800);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius40);
}
.space-text50 {
  color: var(--dl-color-primary-500);
}
.space-checkin {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: column;
}
.space-text51 {
  color: var(--dl-color-secondary-500);
  font-style: normal;
  font-weight: 600;
}
.space-textinput {
  color: var(--dl-color-secondary-400);
  text-align: center;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius40);
}
.space-checkout {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: column;
}
.space-text53 {
  color: var(--dl-color-secondary-500);
  font-style: normal;
  font-weight: 600;
}
.space-textinput1 {
  color: var(--dl-color-secondary-400);
  text-align: center;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius40);
}
.space-office-type {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: column;
}
.space-text55 {
  color: var(--dl-color-secondary-500);
  font-style: normal;
  font-weight: 600;
}
.space-select {
  color: var(--dl-color-secondary-400);
  width: 100%;
  height: auto;
  text-align: center;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.space-team-size {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: column;
}
.space-label {
  color: var(--dl-color-secondary-500);
  font-style: normal;
  font-weight: 600;
}
.space-textinput2 {
  color: var(--dl-color-secondary-400);
  text-align: center;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius40);
}
.space-component1 {
  text-decoration: none;
}
@media(max-width: 991px) {
  .space-gallery {
    max-width: 960px;
  }
}
@media(max-width: 767px) {
  .space-image1 {
    height: 370px;
  }
  .space-left {
    max-width: auto;
  }
  .space-cells1 {
    height: auto;
  }
  .space-cells2 {
    height: auto;
  }
  .space-right {
    width: 100%;
    position: relative;
  }
  .space-form {
    align-self: flex-end;
  }
}
@media(max-width: 479px) {
  .space-gallery {
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
  .space-row {
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .space-container1 {
    align-items: flex-start;
  }
  .space-text {
    text-align: left;
  }
  .space-container2 {
    width: 122px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .space-container3 {
    margin-top: var(--dl-space-space-halfunit);
  }
  .space-hours {
    align-items: flex-start;
  }
  .space-cells {
    height: 100%;
  }
  .space-text10 {
    height: 100%;
  }
  .space-text11 {
    height: 100%;
  }
  .space-cells1 {
    width: auto;
    height: auto;
    align-self: stretch;
    justify-content: flex-start;
  }
  .space-text12 {
    height: 100%;
  }
  .space-text14 {
    height: 100%;
  }
  .space-cells2 {
    height: auto;
    align-self: stretch;
  }
  .space-text15 {
    height: 100%;
  }
  .space-text17 {
    height: 100%;
  }
  .space-text40 {
    padding-top: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
  }
  .space-text42 {
    padding-top: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
  }
  .space-text44 {
    padding-top: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
  }
  .space-text46 {
    padding-top: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
  }
  .space-text48 {
    padding-top: var(--dl-space-space-halfunit);
    padding-bottom: var(--dl-space-space-halfunit);
  }
  .space-right {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }
  .space-textinput {
    width: 100%;
    text-align: center;
  }
  .space-textinput1 {
    width: 100%;
    text-align: center;
  }
  .space-textinput2 {
    width: 100%;
    text-align: center;
  }
}
</style>
