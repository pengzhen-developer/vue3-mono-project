<template>
  <!-- Thanks for tailwind.css -->
  <!-- https://tailwindcomponents.com/component/login-with-image -->
  <div class="h-screen w-screen">
    <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div
        class="absolute z-10 flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 sm:mx-0 bg-white dark:bg-gray-900 dark:bg-opacity-50 dark:text-white"
        style="height: 500px">
        <div class="flex flex-col w-full md:w-1/2 p-4">
          <div class="flex flex-col flex-1 justify-center mb-8">
            <h1 v-if="title" class="text-4xl text-center font-thin mb-8">{{ title }}</h1>
            <h4 v-if="subTitle" class="text-2xl text-center font-thin mb-8">{{ subTitle }}</h4>
            <div class="w-full mt-4">
              <div class="form-horizontal w-3/4 mx-auto">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
        <div
          class="hidden md:block md:w-1/2 rounded-r-lg"
          style="
            background: url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80');
            background-size: cover;
            background-position: center center;
          "></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String
  },

  subTitle: {
    type: String
  }
})
</script>
