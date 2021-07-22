<template>
  <breeze-authenticated-layout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Dashboard built using <span class="text-green-600">Vue</span>
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div
          class="
            overflow-hidden
            shadow-sm
            sm:rounded-lg
            grid grid-cols-1
            md:grid-cols-2
            gap-4
            px-2
          "
        >
          <div class="p-6 bg-white border-gray-200 rounded-lg">
            You're logged in!
          </div>
          <card>
            <p>This is a card build using Vue</p>
            <a :href="route('react.dashboard')" class="underline">
              Go to React dashboard page
            </a>
          </card>
        </div>
      </div>
    </div>
  </breeze-authenticated-layout>
</template>

<script>
import BreezeAuthenticatedLayout from "../Layouts/Authenticated";
import Card from "../Components/Card";

export default {
  components: {
    BreezeAuthenticatedLayout,
    Card,
  },
};
</script>
