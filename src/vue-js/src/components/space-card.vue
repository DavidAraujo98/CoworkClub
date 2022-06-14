<template>
  <div class="space-card-container" v-bind:class="rootClassName">
    <img alt="image" :src="image_src" class="space-card-image" />
    <div class="space-card-container1">
      <div class="space-card-container2">
        <h3 class="space-card-text">{{ title }}</h3>
        <div class="space-card-container3">
          <h3 class="space-card-text1">{{ rating }}</h3>
          <svg viewBox="0 0 950.8571428571428 1024" class="space-card-icon">
            <path
              d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
            ></path>
          </svg>
        </div>
      </div>
      <span class="space-card-text2">{{ description }}</span>
      <div class="space-card-container4">
        <div class="space-card-container5">
          <router-link to="/space" class="space-card-navlink">
            {{ Link }}
          </router-link>
        </div>
        <h3 id="price" class="space-card-text3">{{ price }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpaceCard',
  props: {
    rating: {
      type: String,
      default: '4/5',
    },
    link_text: {
      type: String,
      default: 'https://example.com',
    },
    rootClassName: String,
    description: {
      type: String,
      default:
        'Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover',
    },
    Link: {
      type: String,
      default: 'See more',
    },
    price: {
      type: String,
      default: '15',
    },
    title: {
      type: String,
      default: 'Rover raised $65',
    },
    image_src: {
      type: String,
      default:
        'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-bags.jpg',
    },
  },
}
</script>

<style scoped>
.space-card-container {
  flex: 1;
  width: 255px;
  margin: var(--dl-space-space-doubleunit);
  display: flex;
  padding: 0px;
  max-width: 300px;
  min-width: 200px;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius75);
  flex-direction: column;
}
.space-card-image {
  flex: 0;
  width: 100%;
  align-self: center;
  box-shadow: 0 0.25rem 0.375rem -0.0625rem hsl(0deg 0% 8% / 12%), 0 0.125rem 0.25rem -0.0625rem hsl(0deg 0% 8% / 7%);
  max-height: 150px;
  object-fit: cover;
  transition: 0.3s;
  border-radius: var(--dl-radius-radius-radius75);
}

.space-card-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
}
.space-card-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.space-card-text {
  color: var(--dl-color-secondary-700);
  font-size: 1.25rem;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.space-card-container3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.space-card-text1 {
  color: var(--dl-color-secondary-500);
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 500;
  margin-right: var(--dl-space-space-halfunit);
  margin-bottom: var(--dl-space-space-halfunit);
}
.space-card-icon {
  width: 24px;
  height: 24px;
}
.space-card-text2 {
  text-align: justify;
}
.space-card-container4 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-halfunit);
  align-items: center;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  justify-content: space-between;
}
.space-card-container5 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.space-card-navlink {
  color: var(--dl-color-secondary-500);
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
}
.space-card-text3 {
  color: var(--dl-color-primary-700);
}














</style>
