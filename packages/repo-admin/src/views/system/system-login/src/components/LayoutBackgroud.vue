<template>
  <div class="g-bg">
    <div class="g-polygon g-polygon-1 w-screen h-screen"></div>
    <div class="g-polygon g-polygon-2 w-screen h-screen"></div>
    <div class="g-polygon g-polygon-3 w-screen h-screen"></div>
  </div>
</template>

<style scoped>
.g-polygon {
  position: absolute;
  opacity: 0.5;
}
.g-polygon-1 {
  background: #ffee55;
  clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
}

.g-polygon-2 {
  background: #e950d1;
  clip-path: polygon(10% 0, 100% 70%, 100% 100%, 20% 90%);
}

.g-polygon-3 {
  background: rgba(87, 80, 233);
  clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
}

.g-bg::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(150px);
  z-index: 1;
}
</style>
