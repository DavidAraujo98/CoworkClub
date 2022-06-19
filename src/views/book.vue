<template>
  <div class="book-container">
    <header-logged
      rootClassName="header-logged-root-class-name2"
    ></header-logged>
    <div class="book-hero">
      <div class="book-container01">
        <div class="book-container02">
          <div class="book-container03">
            <button @click="$router.go(-1)" class="book-navlink">
              <svg viewBox="0 0 1024 1024" class="book-icon">
                <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
              </svg>
            </button>
            <h1 class="book-text">
              <span> Booking at </span>
              <span class="book-text02">{{ name }}</span>
            </h1>
          </div>
          <div class="book-container04">
            <h2 class="book-heading">
              <span class="book-text03">Your stay</span>
            </h2>
            <div class="book-container05">
              <div class="book-container06">
                <h3 class="book-text04">
                  <span class="book-text05">Dates</span>
                </h3>
                <span
                  >From <b>{{ checkin }}</b></span
                >
                <span
                  >to <b>{{ checkout }}</b></span
                >
              </div>
              <div class="book-container07">
                <h3 class="book-text07">
                  <span class="book-text08">Team</span>
                </h3>
                <span
                  ><span>{{ teamsize }} member</span></span
                >
              </div>
              <div class="book-container08">
                <h3 class="book-text11"><span>Office type</span></h3>
                <span>{{ office }}</span>
              </div>
            </div>
          </div>
          <div class="book-container09">
            <h2 class="book-heading1">
              <span class="book-text15">Payment</span>
            </h2>
            <div class="book-container10">
              <div class="book-container11">
                <span class="book-text16">EUR {{ price }}</span>
                <select class="book-select">
                  <option value="Option 1">Google Pay</option>
                  <option value="Option 2">Apple Pay</option>
                  <option value="Option 3">PayPal</option>
                  <option value="Option 4">Visa</option>
                </select>
              </div>
            </div>
          </div>
          <div class="book-container12">
            <h2 class="book-heading2">
              <span class="book-text17">Reservation</span>
            </h2>
            <div class="book-container13">
              <svg viewBox="0 0 950.8571428571428 1024" class="book-icon2">
                <path
                  d="M744.571 550.857l-292.571 292.571c-7.429 6.857-18.857 6.857-26.286 0l-164.571-164.571c-6.857-7.429-6.857-18.857 0-25.714l26.286-26.286c6.857-6.857 18.286-6.857 25.714 0l125.714 125.714 253.714-253.714c7.429-6.857 18.857-6.857 25.714 0l26.286 26.286c6.857 6.857 6.857 18.286 0 25.714zM73.143 950.857h804.571v-585.143h-804.571v585.143zM292.571 256v-164.571c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286v164.571c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286zM731.429 256v-164.571c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286v164.571c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"
                ></path>
              </svg>
              <span class="book-text18">
                Your reservation won't be confirmed until the Host accepts your
                request (within 24 hours).
              </span>
            </div>
          </div>
          <primary-pink-button
            button="Confirm Booking !"
            rootClassName="primary-pink-button-root-class-name3"
            @pushed="confirmBook"
          ></primary-pink-button>
        </div>
      </div>
    </div>
    <img
      alt="image"
      src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDcwfHxvZmZpY2V8ZW58MHx8fHwxNjU0OTA1NTI4&amp;ixlib=rb-1.2.1&amp;h=1500"
      class="book-image"
    />
  </div>
</template>

<script>
import HeaderLogged from "../components/header-logged";
import PrimaryPinkButton from "../components/primary-pink-button";
import moment from "moment";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../fb";
require("../../public/moment-precise-range");

export default {
  name: "Book",
  components: {
    HeaderLogged,
    PrimaryPinkButton,
  },

  data() {
    return {
      id: "",
      name: "",
      checkin: "",
      checkout: "",
      officetype: "",
      office: "",
      teamsize: "",
      price: "",
      priceTable: ""
    };
  },

  methods: {
    calculatePrice() {
      var chi = moment(Date.parse(this.checkin));
      var cho = moment(Date.parse(this.checkout));
      var duration = moment.preciseDiff(chi, cho, true);
      var cost = duration.months * parseInt(this.priceTable[2].price);
      cost += parseInt(duration.days / 7) * parseInt(this.priceTable[1].price);
      cost += parseInt(duration.days % 7) * parseInt(this.priceTable[0].price);
      return cost;
    },

    confirmBook() {
      fetch("http://localhost:3000/book/" + this.id, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: "JSON.stringify(this.$data)",
      })
        .then((response) => response.text())
        .then((result) => console.log(result));
    },
  },

  beforeMount() {
    const x = new URLSearchParams(window.location.search);
    this.id = window.location.pathname.split("/").pop();
    this.name = x.get("name");
    this.checkin = x.get("checkin");
    this.checkout = x.get("checkout");
    this.officetype = x.get("officetype");
    this.office = x.get("office");
    this.name = x.get("name");
    this.teamsize = x.get("teamsize");
    getDoc(doc(db, "spaces", this.id))
      .then((querySnapshot) => {
        var data = querySnapshot.data()
        this.priceTable = data.priceTable.filter(
          (x) => x.id == this.officetype
        )[0].list;
        this.price = this.calculatePrice();
      })
  },

  metaInfo: {
    title: "Book - CoworkClub",
    meta: [
      {
        property: "og:title",
        content: "Book - CoworkClub",
      },
    ],
  },
};
</script>

<style scoped>
.book-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.book-hero {
  width: 100%;
  display: flex;
  max-width: 1320px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.book-container01 {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 1320px;
  min-height: 85vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.book-container02 {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--dl-space-space-twelveunits);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.book-container03 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.book-navlink {
  display: contents;
}
.book-icon {
  width: var(--dl-size-size-tripleunit);
  height: auto;
  text-decoration: none;
}
.book-text {
  color: var(--dl-color-primary-500);
}
.book-text02 {
  color: var(--dl-color-secondary-700);
}
.book-container04 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.book-heading {
  margin-top: var(--dl-space-space-unitandahalfunit);
}
.book-text03 {
  color: var(--dl-color-primary-500);
}
.book-container05 {
  width: 100%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-900);
  border-width: 1px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.book-container06 {
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: 0px;
  flex-direction: column;
  justify-content: flex-start;
}
.book-text04 {
  color: var(--dl-color-secondary-500);
}
.book-text05 {
  color: var(--dl-color-secondary-500);
}
.book-container07 {
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: flex-start;
}
.book-text07 {
  color: var(--dl-color-secondary-500);
}
.book-text08 {
  color: var(--dl-color-secondary-500);
}
.book-container08 {
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  margin-left: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: flex-start;
}
.book-text11 {
  color: var(--dl-color-secondary-500);
}
.book-container09 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.book-heading1 {
  margin-top: var(--dl-space-space-unitandahalfunit);
}
.book-text15 {
  color: var(--dl-color-primary-500);
}
.book-container10 {
  width: 100%;
  display: flex;
  align-self: flex-start;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-900);
  border-width: 1px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.book-container11 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.book-text16 {
  color: var(--dl-color-secondary-500);
  font-style: normal;
  font-weight: 700;
}
.book-select {
  width: 100%;
  margin-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-800);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius40);
}
.book-container12 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.book-heading2 {
  margin-top: var(--dl-space-space-unitandahalfunit);
}
.book-text17 {
  color: var(--dl-color-primary-500);
}
.book-container13 {
  width: 100%;
  display: flex;
  align-self: flex-start;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-gray-900);
  border-width: 1px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.book-icon2 {
  width: 40px;
  height: auto;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.book-text18 {
  font-size: 1.2rem;
}
.book-image {
  top: 0px;
  left: auto;
  right: 0px;
  width: 351px;
  bottom: 0px;
  height: 80vh;
  position: absolute;
  object-fit: cover;
  object-position: right;
  border-bottom-left-radius: 10rem;
}
@media (max-width: 991px) {
  .book-hero {
    padding-left: var(--dl-space-space-tripleunit);
    padding-right: var(--dl-space-space-tripleunit);
  }
  .book-container01 {
    max-width: 960px;
  }
  .book-container02 {
    width: 60%;
  }
}
@media (max-width: 767px) {
  .book-container02 {
    width: 100%;
  }
  .book-image {
    display: none;
  }
}
@media (max-width: 479px) {
  .book-container02 {
    width: 100%;
  }
  .book-icon2 {
    width: 2rem;
  }
}
</style>
