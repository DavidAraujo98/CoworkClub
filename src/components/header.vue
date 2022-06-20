<template>
  <div data-role="Header" class="header-header" v-bind:class="rootClassName">
    <div class="header-container">
      <nav class="header-nav">
        <h4 @click="seen = !seen" >CoworkClub</h4>
        <div class="header-menu">
          <router-link to="/" class="header-navlink large">Home</router-link>
          <router-link to="/spaces" class="header-navlink1 large">
            Spaces
          </router-link>
          <router-link v-if="user" to="/profile" class="header-navlink2 large">
            Profile
          </router-link>
        </div>
          <router-link to="/signin" v-if="!user">
            <primary-pink-button text="Login"></primary-pink-button>
          </router-link>
          <secondary-button
            v-else
              text="Logout"
            type="button"
            @pushed="signOut"
          >
          </secondary-button>
      </nav>
    </div>
    <div data-type="MobileMenu" class="header-mobile-menu" v-show="seen" id="hide">
      <div class="header-top">
        <h4 @click="seen = !seen">
          CoworkClub
        </h4>
        <div data-type="CloseMobileMenu" class="header-close-menu" @click="seen = !seen">
          <svg viewBox="0 0 1024 1024" class="header-icon">
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="header-mid">
        <div class="header-menu1">
          <router-link to="/" class="header-navlink3 large">Home</router-link>
          <router-link to="/spaces" class="header-navlink4 large">
            Spaces
          </router-link>
          <router-link v-if="user" to="/profile" class="header-navlink5 large">
            Profile
          </router-link>
        </div>
      </div>
      <div class="header-bot">
        <router-link to="/signin" v-if="!user">
          <primary-pink-button button="Login"></primary-pink-button>
        </router-link>
        <secondary-button
          v-else
          text="Logout"
          type="button"
          @pushed="signOut"
        >
        </secondary-button>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryPinkButton from "./primary-pink-button";
import SecondaryButton from "./secondary-button";
import { onAuthStateChanged, signOut  } from "firebase/auth";
import { auth } from "../fb.js";

export default {
  name: "Header",
  props: {
    rootClassName: String,
  },
  components: {
    PrimaryPinkButton,
    SecondaryButton
  },

  data() {
    return {
      user: false,
      seen: false,
    }
  },

  beforeMount() {
    onAuthStateChanged(auth, (user) => {
      this.user = user
    });
  },

  methods: {
    signOut() {
      signOut(auth).then(() => {
        this.$router.push("/");
      })
    },
  }
  
};
</script>

<style scoped>
.header-header {
  top: 0px;
  left: auto;
  right: auto;
  width: 100%;
  bottom: auto;
  display: flex;
  z-index: 99999;
  position: fixed;
  max-width: 1320px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.header-container {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.header-nav {
  flex: 0 0 auto;
  color: var(--dl-color-secondary-600);
  width: 100%;
  height: 60px;
  display: flex;
  z-index: 100;
  flex-wrap: wrap;
  align-self: center;
  box-shadow: 0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)!important;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  backdrop-filter: saturate(200%) blur(30px);
  justify-content: space-between;
  background-color: hsla(0,0%,100%,.8)!important;
}
.header-link {
  color: var(--dl-color-secondary-700);
  text-align: right;
  font-weight: 600;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.header-menu {
  flex: 0 0 auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.header-navlink {
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink1 {
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink1:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink2 {
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink2:hover {
  color: var(--dl-color-gray-500);
}
.header-mobile-menu {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-space-space-unitandahalfunit);
  z-index: 100;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.header-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-text {
  color: var(--dl-color-secondary-700);
  font-weight: 600;
}
.header-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-icon {
  width: 24px;
  height: 24px;
}
.header-mid {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-menu1 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-navlink3 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink3:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink4 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink4:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink5 {
  transition: 0.3s;
  text-decoration: none;
}
.header-navlink5:hover {
  color: var(--dl-color-gray-500);
}
.header-bot {
  flex: 0 0 auto;
  display: flex;
  margin-top: auto;
  flex-direction: column;
}
@media(max-width: 991px) {
  .header-nav {
    max-width: 960px;
  }
}
@media(max-width: 767px) {
  .header-menu {
    display: none;
  }
  .header-mobile-menu {
    height: auto;
    display: flex;
  }
  .header-bot {
    width: auto;
    align-self: center;
  }
}
@media(max-width: 479px) {
  .header-nav {
    height: 100%;
    flex-wrap: wrap;
  }
  .header-menu {
    display: none;
  }
  .header-mobile-menu {
    display: flex;
  }
}
</style>