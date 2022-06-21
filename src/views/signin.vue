<template>
  <div class="sign-in-container">
    <app-header></app-header>
    <loader :loading="loading"></loader>
    <div class="sign-in-hero">
      <div class="sign-in-container1">
        <div class="sign-in-card">
          <h1 class="sign-in-text headingOne">Ready to work ?</h1>
          <form class="sign-in-form">
            <div class="sign-in-email">
              <label class="sign-in-text1">Email</label>
              <input
                type="text"
                id="search"
                autofocus
                class="sign-in-textinput input"
                v-model="email"
                required
              />
            </div>
            <div class="sign-in-password">
              <label class="sign-in-text2">Password</label>
              <input
                type="password"
                id="search"
                autofocus
                class="sign-in-textinput1 input"
                v-model="password"
                required
              />
            </div>
            <div class="sign-in-container2">
              <div class="sign-in-container3">
                <span class="sign-in-text3">
                  Don&apos;t have an account yet ?
                </span>
                <router-link to="/signup" class="sign-in-navlink">
                  Register
                </router-link>
              </div>
              <primary-blue-button
                rootClassName="primary-blue-button-root-class-name2"
                text="Sign In"
                type="button"
                @pushed="sign"
              ></primary-blue-button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <img
      alt="image"
      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxvZmZpY2V8ZW58MHx8fHwxNjU0NDIwMTA1&amp;ixlib=rb-1.2.1&amp;h=1500"
      class="sign-in-image"
    />
    <app-footer></app-footer>
  </div>
</template>

<script>
import PrimaryBlueButton from "../components/primary-blue-button";
import AppFooter from "../components/footer";
import AppHeader from "../components/header";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fb.js";
import Loader from "../components/loader.vue";

export default {
  name: "SignIn",
  components: {
    PrimaryBlueButton,
    AppFooter,
    AppHeader,
    Loader,
  },

  data() {
    return {
      loading: false,
      email: "",
      password: "",
    };
  },

  methods: {
    sign() {
      this.loading = true;
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.$user = userCredential.user;
          this.$router.push("/");
          this.loading = false;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.sign-in-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.sign-in-hero {
  width: 100%;
  display: flex;
  max-width: 1320px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.sign-in-container1 {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 1320px;
  min-height: 85vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.sign-in-card {
  flex: 0 0 auto;
  width: 60%;
  display: flex;
  padding: var(--dl-space-space-tripleunit);
  z-index: 1;
  box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
    0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
  margin-top: 0px;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  backdrop-filter: saturate(200%) blur(30px);
  background-color: hsla(0, 0%, 100%, 0.8);
}
.sign-in-text {
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
  background-image: linear-gradient(310deg, #7928ca, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sign-in-form {
  width: 100%;
  height: auto;
  position: relative;
}
.sign-in-email {
  width: 100%;
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  flex-direction: column;
}
.sign-in-text1 {
  color: var(--dl-color-secondary-500);
}
.sign-in-textinput {
  width: 100%;
  height: auto;
  font-size: 1rem;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  padding-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-secondary-100);
  border-width: 1px;
  padding-left: var(--dl-space-space-halfunit);
  padding-right: 23px;
  padding-bottom: var(--dl-space-space-halfunit);
  border-top-left-radius: var(--dl-radius-radius-radius40);
  border-top-right-radius: var(--dl-radius-radius-radius40);
  border-bottom-left-radius: var(--dl-radius-radius-radius40);
  border-bottom-right-radius: var(--dl-radius-radius-radius40);
}
.sign-in-password {
  width: 100%;
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  flex-direction: column;
}
.sign-in-text2 {
  color: var(--dl-color-secondary-500);
}
.sign-in-textinput1 {
  width: 100%;
  height: auto;
  font-size: 1rem;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  padding-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-secondary-100);
  border-width: 1px;
  padding-left: var(--dl-space-space-halfunit);
  padding-right: 23px;
  padding-bottom: var(--dl-space-space-halfunit);
  border-top-left-radius: var(--dl-radius-radius-radius40);
  border-top-right-radius: var(--dl-radius-radius-radius40);
  border-bottom-left-radius: var(--dl-radius-radius-radius40);
  border-bottom-right-radius: var(--dl-radius-radius-radius40);
}
.sign-in-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-end;
  justify-content: space-between;
}
.sign-in-container3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sign-in-text3 {
  font-size: 0.8rem;
  margin-right: var(--dl-space-space-halfunit);
}
.sign-in-navlink {
  color: var(--dl-color-primary-700);
  font-size: 0.8rem;
  text-decoration: underline;
}
.sign-in-image {
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
@media (max-width: 991px) {
  .sign-in-hero {
    padding-left: var(--dl-space-space-tripleunit);
    padding-right: var(--dl-space-space-tripleunit);
  }
  .sign-in-container1 {
    max-width: 960px;
  }
  .sign-in-card {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .sign-in-card {
    align-items: center;
  }
  .sign-in-image {
    display: none;
  }
}
@media (max-width: 479px) {
  .sign-in-card {
    padding: var(--dl-space-space-unit);
  }
}
</style>
