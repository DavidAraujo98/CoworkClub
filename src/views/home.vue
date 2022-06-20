<template>
  <div class="home-container">
    <app-header></app-header>
    <div class="home-hero">
      <div class="home-container1">
        <div class="home-card">
          <h1 class="home-text headingOne">Work your own way</h1>
          <h1 class="home-text1 headingOne">Where, when and how you want</h1>
          <span class="home-text2 lead">
            <span>
              Find the story of Creative Tim&apos;s most complex design
            </span>
            <span
              >system and all the work that make this design available.</span
            >
          </span>
          <input
            type="text"
            id="search"
            autofocus
            placeholder="Where to ?"
            class="home-textinput input"
            v-model="search"
          />
          <router-link :to="{ path: '/spaces', query: { search: search }}" class="home-navlink">
            <primary-pink-button
              button="Search"
              rootClassName="primary-pink-button-root-class-name"
              class="home-component1"
            ></primary-pink-button>
          </router-link>
        </div>
      </div>
    </div>
    <img
      alt="image"
      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM1fHxvZmZpY2V8ZW58MHx8fHwxNjU0MDk1Mjc0&amp;ixlib=rb-1.2.1&amp;h=1500"
      class="home-image"
    />
    <section class="home-features">
      <feature-card
        text="Choose the best design system for your next product."
        title="Private Office"
        link_url="/spaces?type=privoffice"
        image_src="/playground_assets/workplace-200h.png"
        link_text="See Private Offices"
      ></feature-card>
      <feature-card
        text="Get fast access to a quality and a calm work place"
        title="Hot Desk"
        link_url="/spaces?type=hotdesk"
        image_src="/playground_assets/working-with-laptop3-200h.png"
        link_text="See Hot Desks"
      ></feature-card>
      <feature-card
        text="Just starting ? Find the best solutions for you're start-up"
        title="Virtual Office"
        link_url="/spaces?type=virtual"
        image_src="/playground_assets/cloud-200h.png"
        link_text="See Virtual Offices"
      ></feature-card>
      <feature-card
        text="Where big ideas come to live."
        title="Metting Rooms"
        link_url="/spaces?type=meeting"
        image_src="/playground_assets/meeting-200h.png"
        link_text="See Meeting Rooms"
      ></feature-card>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "../components/header";
import PrimaryPinkButton from "../components/primary-pink-button";
import FeatureCard from "../components/feature-card";
import AppFooter from "../components/footer";

export default {
  name: "Home",
  components: {
    AppHeader,
    PrimaryPinkButton,
    FeatureCard,
    AppFooter,
  },

  data() {
    return {
      search: "",
    };
  },

  metaInfo: {
    title: "CoworkClub",
    meta: [
      {
        property: "og:title",
        content: "CoworkClub",
      },
    ],
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-hero {
  width: 100%;
  display: flex;
  max-width: 1320px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.home-container1 {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 1320px;
  min-height: 85vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-card {
  flex: 0 0 auto;
  width: 60%;
  display: flex;
  padding: var(--dl-space-space-tripleunit);
  z-index: 1;
  box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
    0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
  margin-top: 8rem;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  backdrop-filter: saturate(200%) blur(30px);
  background-color: hsla(0, 0%, 100%, 0.8);
}
.home-text {
  text-align: center;
  background-image: linear-gradient(310deg, #7928ca, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-text1 {
  color: var(--dl-color-secondary-700);
  text-align: center;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
}
.home-text2 {
  color: var(--dl-color-secondary-600);
  margin-right: var(--dl-space-space-tripleunit);
  margin-bottom: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-tripleunit);
}
.home-textinput {
  width: 100%;
  height: var(--dl-size-size-tripleunit);
  padding-top: 0px;
  border-width: 1px;
  padding-left: 22px;
  padding-right: 23px;
  padding-bottom: 0px;
  border-top-left-radius: var(--dl-radius-radius-radius40);
  border-top-right-radius: var(--dl-radius-radius-radius40);
  border-bottom-left-radius: var(--dl-radius-radius-radius40);
  border-bottom-right-radius: var(--dl-radius-radius-radius40);
}
.home-navlink {
  display: contents;
}
.home-component1 {
  text-decoration: none;
}
.home-image {
  top: 0px;
  left: auto;
  right: 0px;
  width: 50%;
  bottom: 0px;
  height: 80vh;
  position: absolute;
  object-fit: cover;
  object-position: right;
  border-bottom-left-radius: 10rem;
}
.home-features {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1320px;
  align-items: flex-start;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-sixunits);
}
@media (max-width: 991px) {
  .home-hero {
    padding-left: var(--dl-space-space-tripleunit);
    padding-right: var(--dl-space-space-tripleunit);
  }
  .home-container1 {
    max-width: 960px;
  }
  .home-card {
    width: 100%;
  }
  .home-features {
    max-width: 960px;
  }
}
@media (max-width: 767px) {
  .home-card {
    align-items: center;
  }
  .home-text2 {
    text-align: center;
    margin-right: 0px;
    padding-right: 0px;
  }
  .home-image {
    display: none;
  }
  .home-features {
    max-width: 720px;
    padding-top: var(--dl-space-space-doubleunit);
    padding-left: var(--dl-space-space-unitandahalfunit);
    padding-right: var(--dl-space-space-unitandahalfunit);
    padding-bottom: var(--dl-space-space-doubleunit);
  }
}
@media (max-width: 479px) {
  .home-card {
    padding: var(--dl-space-space-unit);
  }
  .home-features {
    width: 100%;
  }
}
</style>
