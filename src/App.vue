<template>
  <v-app>
    <v-app-bar app color="blue darken-1" dark shrink-on-scroll>
      <v-spacer />
      <v-img
        :src="require('@/assets/logo.png')"
        class="shrink"
        contain
        transition="scale-transition"
        height="100%"
      />
    </v-app-bar>

    <v-main>
      <v-sheet id="scroll-target">
        <v-alert
          class="mx-12 mt-16"
          border="left"
          color="orange darken-2"
          dense
          dismissible
          outlined
          text
          type="error"
        >
          Only MBC 2 is available now
        </v-alert>
        <router-view class="router-view" />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({})
});
</script>

<style>
.router-view {
  margin: 2em;
}
</style>
