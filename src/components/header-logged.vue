<template>
  <div
    data-role="Header"
    class="header-logged-header"
    v-bind:class="rootClassName"
  >
    <div class="header-logged-container">
      <nav class="header-logged-nav">
        <router-link to="/" class="header-logged-link large">
          CoworkClub
        </router-link>
        <div class="header-logged-menu">
          <router-link to="/" class="header-logged-navlink large">
            Home
          </router-link>
          <router-link to="/spaces" class="header-logged-navlink1 large">
            Spaces
          </router-link>
        </div>
        <router-link to="/profile" class="header-logged-navlink2">
          <secondary-button
            button="Profile"
            rootClassName="secondary-button-root-class-name"
            class="header-logged-component"
          ></secondary-button>
        </router-link>
      </nav>
    </div>
    <div data-type="MobileMenu" class="header-logged-mobile-menu">
      <div class="header-logged-top">
        <router-link to="/" class="header-logged-navlink3 large">
          Soft UI Design System
        </router-link>
        <div data-type="CloseMobileMenu" class="header-logged-close-menu">
          <svg viewBox="0 0 1024 1024" class="header-logged-icon">
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="header-logged-mid">
        <div class="header-logged-menu1">
          <router-link to="/" class="header-logged-navlink4 large">
            Home
          </router-link>
          <router-link to="/spaces" class="header-logged-navlink5 large">
            Profile
          </router-link>
          <span class="header-logged-text large">Coming Soon</span>
        </div>
      </div>
      <div class="header-logged-bot">
        <primary-pink-button button="buy now"></primary-pink-button>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryButton from './secondary-button'
import PrimaryPinkButton from './primary-pink-button'

export default {
  name: 'HeaderLogged',
  props: {
    rootClassName: String,
  },
  components: {
    SecondaryButton,
    PrimaryPinkButton,
  },
}
</script>

<style scoped>
.header-logged-header {
  top: 0px;
  left: auto;
  right: auto;
  width: 100%;
  bottom: auto;
  display: flex;
  z-index: 3;
  position: fixed;
  max-width: 1320px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.header-logged-container {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.header-logged-nav {
  flex: 0 0 auto;
  color: var(--dl-color-secondary-600);
  width: 100%;
  height: 60px;
  display: flex;
  z-index: 101;
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
.header-logged-link {
  color: var(--dl-color-secondary-700);
  text-align: right;
  font-weight: 600;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  text-decoration: none;
}
.header-logged-menu {
  flex: 0 0 auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.header-logged-navlink {
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-logged-navlink:hover {
  color: var(--dl-color-gray-500);
}
.header-logged-navlink1 {
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-logged-navlink1:hover {
  color: var(--dl-color-gray-500);
}
.header-logged-navlink2 {
  display: contents;
}
.header-logged-component {
  text-decoration: none;
}
.header-logged-mobile-menu {
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
.header-logged-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-logged-navlink3 {
  color: var(--dl-color-secondary-700);
  font-weight: 600;
  text-decoration: none;
}
.header-logged-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-logged-icon {
  width: 24px;
  height: 24px;
}
.header-logged-mid {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-logged-menu1 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-logged-navlink4 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-logged-navlink4:hover {
  color: var(--dl-color-gray-500);
}
.header-logged-navlink5 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-logged-navlink5:hover {
  color: var(--dl-color-gray-500);
}
.header-logged-text {
  transition: 0.3s;
  text-decoration: none;
}
.header-logged-text:hover {
  color: var(--dl-color-gray-500);
}
.header-logged-bot {
  flex: 0 0 auto;
  display: flex;
  margin-top: auto;
  flex-direction: column;
}
.header-logged-root-class-name {
  align-self: center;
  margin-bottom: 0px;
}
.header-logged-root-class-name1 {
  margin-bottom: 0px;
}


@media(max-width: 991px) {
  .header-logged-nav {
    max-width: 960px;
  }
  .header-logged-menu {
    display: none;
  }
}
</style>
