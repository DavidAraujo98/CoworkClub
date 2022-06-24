<template>
  <div class="space-card-container" v-bind:class="rootClassName">
    <img alt="image" :src="image_src" class="space-card-image" />
    <div class="space-card-container1">
      <div class="space-card-container2">
        <h3 class="space-card-text">{{ name }}</h3>
        <div class="space-card-container3">
          <h3 class="space-card-text1">{{ rating }}</h3>
          <i class="fa-solid fa-star fa-lg" style="color: #ffcc00"></i>
        </div>
      </div>
      <span class="space-card-text2">{{ description }}</span>
      <div class="space-card-container4">
        <div class="space-card-container5">
          <router-link :id="id" :to="`spaces/${id}`" class="space-card-navlink">
            See more
          </router-link>
        </div>
        <h3 id="price" class="space-card-text3">{{ price }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpaceCard",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "Space name",
    },
    rating: {
      type: String,
      default: "4/5",
    },
    rootClassName: String,
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    price: {
      type: String,
      default: "15",
    },
    image_src: {
      type: String,
      default:
        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-bags.jpg",
    },
  },
};
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
  box-shadow: 0 0.25rem 0.375rem -0.0625rem hsl(0deg 0% 8% / 12%),
    0 0.125rem 0.25rem -0.0625rem hsl(0deg 0% 8% / 7%);
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
