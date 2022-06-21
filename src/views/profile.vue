<template>
  <div class="profile-container">
    <app-header></app-header>
    <loader :loading="loading"></loader>
    <div class="profile-hero">
      <div class="profile-head">
        <h1 class="profile-text">{{ username }}</h1>
        <div class="profile-container01">
          <div class="profile-container02">
            <div class="profile-container03">
              <p class="profile-text01">
                <span>Job Title:</span>
              </p>
              <p class="profile-text04">
                <span>{{ jobtitle }}</span>
              </p>
            </div>
            <div class="profile-container04">
              <p class="profile-text06"><span>Preferred office:</span></p>
              <p class="profile-text08">
                <span>{{ prefoff }}</span>
              </p>
            </div>
            <div class="profile-container05">
              <p class="profile-text10"><span>Favorite space:</span></p>
              <p class="profile-text12">
                <span>{{ favsp }}</span>
              </p>
            </div>
            <div class="profile-container06">
              <p class="profile-text14"><span>Last visited space:</span></p>
              <p class="profile-text16">
                <span>{{ lstsp }}</span>
              </p>
            </div>
            <div class="profile-container07">
              <p class="profile-text18"><span>Visited spaces:</span></p>
              <p class="profile-text20">
                <span>{{ vstsp }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-details">
        <form class="profile-form">
          <div class="profile-column">
            <div class="profile-title">
              <h2 class="profile-text22">
                <span>Personal details</span>
              </h2>
              <svg viewBox="0 0 1024 1024" class="profile-icon">
                <path
                  d="M896 293.504l-165.504-165.504c-12.501-12.501-28.928-18.731-45.269-18.731-16.384 0-32.725 6.229-45.227 18.731l-466.731 466.731c-12.501 12.501-23.808 31.019-32 50.688-8.192 19.755-13.269 40.917-13.269 58.581v192h192c17.664 0 38.741-5.077 58.496-13.269 19.755-8.192 38.229-19.499 50.731-32l466.773-466.731c12.501-12.501 18.731-28.928 18.731-45.269 0-16.384-6.229-32.725-18.731-45.227zM246.101 642.603l353.835-353.835 52.565 52.565-353.835 353.835-52.565-52.565zM320 810.667h-64l-42.667-42.667v-64c0-3.285 1.408-13.013 6.741-25.813 0.427-0.853 126.592 125.355 126.592 125.355-13.739 5.717-23.381 7.125-26.667 7.125zM381.397 777.899l-52.565-52.565 353.835-353.835 52.565 52.565-353.835 353.835zM765.397 393.899l-135.339-135.339 55.168-55.168 135.253 135.339-55.083 55.168z"
                ></path>
              </svg>
            </div>
            <div class="profile-row">
              <div class="profile-container08">
                <label>Username</label>
                <input
                  type="text"
                  :placeholder="username"
                  class="profile-textinput input"
                  :disabled="lock"
                />
              </div>
              <div class="profile-container09">
                <label>Email</label>
                <input
                  type="text"
                  :placeholder="email"
                  class="profile-textinput1 input"
                  :disabled="lock"
                />
              </div>
              <div class="profile-container10">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="●●●●●●●●●●●"
                  class="profile-textinput2 input"
                  :disabled="lock"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="profile-calendar">
        <div class="profile-column1">
          <h2 class="profile-text28">Bookings</h2>
          <div class="profile-row1">
            <list-item
              v-for="item in bookings"
              :key="item.checkin"
              rootClassName="list-item-root-class-name"
              :space="item.space_id"
              :office="item.office_type"
              :checkin="item.checkin"
              :checkout="item.checkout"
              :price="item.price"
            ></list-item>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name1"></app-footer>
  </div>
</template>

<script>
import AppHeader from "../components/header";
import ListItem from "../components/list-item";
import AppFooter from "../components/footer";
import Loader from "../components/loader";

import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../fb";

export default {
  name: "Profile",
  props: {},
  components: {
    AppHeader,
    ListItem,
    AppFooter,
    Loader
},

  data() {
    return {
      loading: true,
      lock: true,
      bookings: [],
      username: "",
      jobtitle: "",
      prefoff: "",
      favsp: "",
      lstsp: "",
      email: "",
      vstsp: 0,
    };
  },

  beforeMount() {
    var user = auth.currentUser;
    this.email = user.email;
    user = doc(db, "users", this.email);
    getDoc(user).then((querySnapshot) => {
      var data = querySnapshot.data();
      this.username = data.username;
      this.jobtitle = data.jobtitle;
      this.prefoff = data.prefoff;
      this.vstsp = data.vstsp;

      const q = query(collection(db, "book"), where("user_email", "==", user));
      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getDoc(doc.data().space_id).then((x) => {
            var y = doc.data()
            y.space_id = x.data().name
            this.bookings.push(y)
            console.log(this.bookings);
          })
        });
      });

      getDoc(data.favsp).then((querySnapshot) => {
        var sp = querySnapshot.data();
        this.favsp = sp.name;
      });
      getDoc(data.lstsp).then((querySnapshot) => {
        var sp = querySnapshot.data();
        this.lstsp = sp.name;
      });

    }).then(() => {
      this.loading = false;
    })
  },
};
</script>

<style scoped>
.profile-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.profile-hero {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1400px;
  margin-top: var(--dl-space-space-sixunits);
  min-height: 80vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.profile-head {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-doubleunit);
  flex-direction: column;
  justify-content: flex-start;
}
.profile-text {
  color: var(--dl-color-primary-700);
  font-size: 4em;
}
.profile-container01 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.profile-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
}
.profile-container03 {
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  margin-left: var(--dl-space-space-unitandahalfunit);
  padding-top: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-unitandahalfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.profile-text01 {
  color: var(--dl-color-secondary-200);
  margin-right: var(--dl-space-space-halfunit);
}
.profile-text04 {
  color: var(--dl-color-secondary-600);
}
.profile-container04 {
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  margin-left: var(--dl-space-space-unitandahalfunit);
  padding-top: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-unitandahalfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.profile-text06 {
  color: var(--dl-color-secondary-200);
  margin-right: var(--dl-space-space-halfunit);
}
.profile-text08 {
  color: var(--dl-color-secondary-600);
}
.profile-container05 {
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  margin-left: var(--dl-space-space-unitandahalfunit);
  padding-top: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-unitandahalfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.profile-text10 {
  color: var(--dl-color-secondary-200);
  margin-right: var(--dl-space-space-halfunit);
}
.profile-text12 {
  color: var(--dl-color-secondary-600);
}
.profile-container06 {
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  margin-left: var(--dl-space-space-unitandahalfunit);
  padding-top: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-unitandahalfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.profile-text14 {
  color: var(--dl-color-secondary-200);
  margin-right: var(--dl-space-space-halfunit);
}
.profile-text16 {
  color: var(--dl-color-secondary-600);
}
.profile-container07 {
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  margin-left: var(--dl-space-space-unitandahalfunit);
  padding-top: var(--dl-space-space-halfunit);
  margin-right: var(--dl-space-space-unitandahalfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius40);
  margin-bottom: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.profile-text18 {
  color: var(--dl-color-secondary-200);
  margin-right: var(--dl-space-space-halfunit);
}
.profile-text20 {
  color: var(--dl-color-secondary-600);
}
.profile-details {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-doubleunit);
  justify-content: space-between;
}
.profile-form {
  width: 100%;
  height: auto;
  align-self: flex-start;
}
.profile-column {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.profile-title {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.profile-text22 {
  color: var(--dl-color-primary-100);
  margin-bottom: 0px;
}
.profile-icon {
  width: 24px;
  height: 24px;
  margin-top: var(--dl-space-space-halfunit);
}
.profile-row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.profile-container08 {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.profile-textinput {
  width: 329px;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-800);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius40);
}
.profile-container09 {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.profile-textinput1 {
  width: 329px;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-800);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius40);
}
.profile-container10 {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.profile-textinput2 {
  width: 329px;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  border-color: var(--dl-color-gray-800);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius40);
}
.profile-calendar {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-doubleunit);
  justify-content: space-between;
}
.profile-column1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.profile-text28 {
  color: var(--dl-color-primary-100);
  margin-bottom: 0px;
}
.profile-row1 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
@media (max-width: 991px) {
  .profile-hero {
    flex-direction: column;
  }
  .profile-container03 {
    margin: var(--dl-space-space-halfunit);
  }
  .profile-container04 {
    margin: var(--dl-space-space-halfunit);
  }
  .profile-container05 {
    margin: var(--dl-space-space-halfunit);
  }
  .profile-container06 {
    margin: var(--dl-space-space-halfunit);
  }
  .profile-container07 {
    margin: var(--dl-space-space-halfunit);
  }
}
@media (max-width: 767px) {
  .profile-hero {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media (max-width: 479px) {
  .profile-hero {
    padding-top: 32px;
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: 32px;
  }
  .profile-row {
    justify-content: center;
  }
  .profile-textinput {
    width: 404px;
  }
  .profile-textinput1 {
    width: 404px;
  }
  .profile-textinput2 {
    width: 404px;
  }
  .profile-text28 {
    margin-bottom: var(--dl-space-space-halfunit);
  }
  .profile-row1 {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
