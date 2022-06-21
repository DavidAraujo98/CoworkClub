<template>
  <main>
    <div v-if="loading" class="loader"></div>
  </main>
</template>

<script>
export default {
  name: "Loader",

    props: {
        loading: {
            type: Boolean,
            default: true
        }
    },
};
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #cb0c9fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>