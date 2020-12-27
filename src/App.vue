<template>
  <v-app>
    <v-app-bar app color="blue darken-1" dark shrink-on-scroll>
      <v-spacer />
      <v-img
        :src="require('@/assets/logo.png')"
        class="shrink invert"
        contain
        transition="scale-transition"
        height="100%"
      />
    </v-app-bar>

    <v-main>
      <v-sheet id="scroll-target">
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
.invert {
  filter: invert(100%);
}
</style>
