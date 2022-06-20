<template>
  <div class="sign-up-container">
    <app-header></app-header>
    <div class="sign-up-hero">
      <div class="sign-up-container1">
        <div class="sign-up-card">
          <h1 class="sign-up-text headingOne">Come work with us !</h1>
          <form class="sign-up-form">
            <div class="sign-up-username">
              <label class="sign-up-text1">Display Name</label>
              <input
                type="text"
                id="search"
                autofocus
                placeholder="How should we call you ?"
                class="sign-up-textinput input"
                v-model="username"
                required
              />
            </div>
            <div class="sign-up-email">
              <label class="sign-up-text2">Email</label>
              <input
                type="text"
                id="search"
                autofocus
                placeholder="example@example.com"
                class="sign-up-textinput1 input"
                v-model="email"
                required
              />
            </div>
            <div class="sign-up-password">
              <label class="sign-up-text3">Password</label>
              <input
                type="password"
                id="search"
                autofocus
                placeholder="Choose a strong password"
                class="sign-up-textinput2 input"
                v-model="password"
                required
              />
            </div>
            <div class="sign-up-container2">
              <div class="sign-up-container3">
                <span class="sign-up-text4">Already have an account ?</span>
                <router-link to="/signin" class="sign-up-navlink">
                  Sign In
                </router-link>
              </div>
              <primary-blue-button
                rootClassName="primary-blue-button-root-class-name"
                text="Register"
                type="button"
                @pushed="register"
              ></primary-blue-button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <img
      alt="image"
      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxvZmZpY2V8ZW58MHx8fHwxNjU0NDIwMTA1&amp;ixlib=rb-1.2.1&amp;h=1500"
      class="sign-up-image"
    />
    <app-footer></app-footer>
  </div>
</template>

<script>
import PrimaryBlueButton from "../components/primary-blue-button";
import AppFooter from "../components/footer";
import AppHeader from "../components/header";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../fb.js";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "SignUp",
  components: {
    PrimaryBlueButton,
    AppFooter,
    AppHeader,
  },

  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },

  methods: {
    register() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.$user = userCredential.user;
          setDoc(doc(db, "users", this.email), {
            username: this.username,
          }).then(() => {
            this.$router.push("/");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    },
  },
};
</script>

<style scoped>
.sign-up-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.sign-up-hero {
  width: 100%;
  display: flex;
  max-width: 1320px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.sign-up-container1 {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 1320px;
  min-height: 85vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.sign-up-card {
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
.sign-up-text {
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
  background-image: linear-gradient(310deg, #7928ca, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sign-up-form {
  width: 100%;
  height: auto;
  position: relative;
}
.sign-up-username {
  width: 100%;
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  flex-direction: column;
}
.sign-up-text1 {
  color: var(--dl-color-secondary-500);
}
.sign-up-textinput {
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
.sign-up-email {
  width: 100%;
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  flex-direction: column;
}
.sign-up-text2 {
  color: var(--dl-color-secondary-500);
}
.sign-up-textinput1 {
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
.sign-up-password {
  width: 100%;
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  flex-direction: column;
}
.sign-up-text3 {
  color: var(--dl-color-secondary-500);
}
.sign-up-textinput2 {
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
.sign-up-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-end;
  justify-content: space-between;
}
.sign-up-container3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sign-up-text4 {
  font-size: 0.8rem;
  margin-right: var(--dl-space-space-halfunit);
}
.sign-up-navlink {
  color: var(--dl-color-primary-700);
  font-size: 0.8rem;
  text-decoration: underline;
}
.sign-up-image {
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
  .sign-up-hero {
    padding-left: var(--dl-space-space-tripleunit);
    padding-right: var(--dl-space-space-tripleunit);
  }
  .sign-up-container1 {
    max-width: 960px;
  }
  .sign-up-card {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .sign-up-card {
    align-items: center;
  }
  .sign-up-image {
    display: none;
  }
}
@media (max-width: 479px) {
  .sign-up-card {
    padding: var(--dl-space-space-unit);
  }
}
</style>
