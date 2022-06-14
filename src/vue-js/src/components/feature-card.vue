<template>
  <div class="feature-card-container">
    <img :alt="image_alt" :src="image_src" class="feature-card-image" />
    <h5 class="feature-card-text headingThree">{{ title }}</h5>
    <span class="feature-card-text1">{{ text }}</span>
    <a :href="link_url" target="_blank" rel="noreferrer noopener">
      {{ link_text }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    image_src: {
      type: String,
      default: '0c545438-dccd-4f3c-8e7c-92d8d4113c1d',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    link_text: {
      type: String,
      default: 'Link',
    },
    text: {
      type: String,
      default: 'Get the latest design ideas and turn it into reality.',
    },
    title: {
      type: String,
      default: 'Design',
    },
    link_url: {
      type: String,
      default: '/example.com',
    },
  },
}
</script>

<style scoped>
.feature-card-container {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  margin-top: var(--dl-space-space-triplequarterunit);
  min-height: 250px;
  align-items: center;
  padding-left: var(--dl-space-space-triplequarterunit);
  padding-right: var(--dl-space-space-triplequarterunit);
  flex-direction: column;
}
.feature-card-image {
  width: 62px;
  height: 62px;
  object-fit: cover;
  margin-bottom: 11px;
}
.feature-card-text {
  color: var(--dl-color-secondary-600);
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
  margin-bottom: var(--dl-space-space-halfunit);
}
.feature-card-text1 {
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
@media(max-width: 767px) {
  .feature-card-container {
    width: 50%;
  }
}
@media(max-width: 479px) {
  .feature-card-container {
    width: 100%;
  }
}
</style>
