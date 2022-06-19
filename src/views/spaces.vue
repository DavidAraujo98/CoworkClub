<template>
  <div class="spaces-container">
    <header-logged
      rootClassName="header-logged-root-class-name"
    ></header-logged>
    <app-toolbar
      rootClassName="toolbar-root-class-name"
      @minprice="setMinPrice"
      @maxprice="setMaxPrice"
      @parking="setParking"
      @amenities="setAmenities"
      @minhours="setMinHours"
      @maxhours="setMaxHours"
      @type="setType"
    ></app-toolbar>
    <div class="spaces-container1">
      <div class="spaces-container2">
        <div v-for="item in space_list" :key="item.id">
          <space-card
            v-if="
              item.data().price >= min_price &&
              item.data().price <= max_price &&
              ((parking && item.data().parking) || !parking) &&
              (search == undefined ||
                item.data().name.includes(search) ||
                item.data().location.includes(search))
            "
            :name="item.data().name"
            :id="item.id"
            :price="`${item.data().price}€/day`"
            :title="item.id"
            :rating="item.data().rating"
            :image_src="item.data().thumbnail"
            :description="item.data().description"
            rootClassName="space-card-root-class-name1"
          ></space-card>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import HeaderLogged from "../components/header-logged";
import AppToolbar from "../components/toolbar";
import SpaceCard from "../components/space-card";
import AppFooter from "../components/footer";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "firebase/storage";
import { db, st } from "../fb";

export default {
  name: "Spaces",
  components: {
    HeaderLogged,
    AppToolbar,
    SpaceCard,
    AppFooter,
  },

  data() {
    return {
      space_list: [],
      search: "",
      min_price: 0,
      max_price: 9999999,
      parking: false,
      amenities: null,
      min_hours: "00:00",
      max_hours: "23:59",
      type: null,
    };
  },

  methods: {
    setMinPrice(val) {
      this.min_price = val == "" ? 0 : parseInt(val);
    },
    setMaxPrice(val) {
      this.max_price = val == "" ? 9999999 : parseInt(val);
    },
    setParking(val) {
      this.parking = val;
    },
    setAmenities(val) {
      this.amenities = val;
    },
    setMinHours(val) {
      this.min_hours = val;
    },
    setMaxHours(val) {
      this.max_hours = val;
    },
    setType(val) {
      this.type = val;
    },
  },

  beforeMount() {
    this.search = new URLSearchParams(window.location.search).get("search");
    const image = ref(st, 'spaces-thumbnails');
    console.log(image);
    getDocs(collection(db, "spaces")).then(
      (querySnapshot) => (this.space_list = querySnapshot.docs)
    );
  },

  metaInfo: {
    title: "Spaces - CoworkClub",
    meta: [
      {
        property: "og:title",
        content: "Spaces - CoworkClub",
      },
    ],
  },
};
</script>

<style scoped>
.spaces-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.spaces-container1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  position: relative;
  max-width: 1320px;
  align-self: center;
  margin-top: var(--dl-space-space-tripleunit);
  min-height: 85vh;
  align-items: top;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: flex-start;
}
.spaces-container2 {
  width: 100%;
  height: auto;
  margin: 0px;
  display: flex;
  padding: 0px;
  flex-wrap: wrap;
  align-items: start;
  flex-direction: row;
  justify-content: flex-start;
}
@media (max-width: 991px) {
  .spaces-container1 {
    max-width: 960px;
    margin-top: var(--dl-space-space-sixunits);
  }
}
@media (max-width: 767px) {
  .spaces-container1 {
    align-self: center;
    margin-top: var(--dl-space-space-fourunits);
    align-items: center;
  }
  .spaces-container2 {
    height: 2460px;
    margin-top: 0px;
    justify-content: center;
  }
}
@media (max-width: 479px) {
  .spaces-container1 {
    height: auto;
    margin-top: var(--dl-space-space-twelveunits);
  }
  .spaces-container2 {
    height: 2507px;
    justify-content: center;
  }
}
</style>
