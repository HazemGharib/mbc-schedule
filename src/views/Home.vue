<template>
  <div class="home">
    <div class="container" v-if="movies">
      <v-card
        v-for="movie in movies"
        :key="movie.id"
        class="mx-auto my-8 py-4"
        color="grey lighten-3"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-right subtitle-2">
              {{ getDayName(movie.startTime) }}
            </div>
            <div class="text-right overline">
              {{ new Date(movie.startTime).toLocaleDateString() }}
            </div>
            <div class="text-right caption mb-4">
              {{
                `${checkTime(new Date(movie.startTime).getHours())} : 
                ${checkTime(new Date(movie.startTime).getMinutes())} 
                - 
                ${checkTime(new Date(movie.endTime).getHours())} : 
                ${checkTime(new Date(movie.endTime).getMinutes())}`
              }}
            </div>
            <v-list-item-title class="rtl text-right headline mb-1">
              {{ movie.showPageTitle }}
            </v-list-item-title>
            <v-card-subtitle class="rtl text-right ">
              {{ movie.showPageAboutInArabic }}
            </v-card-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions class="justify-end">
          <v-chip color="orange darken-2" dark>
            {{ movie.showPageGenreInArabic }}
          </v-chip>
        </v-card-actions>
      </v-card>
    </div>
    <div class="mx-auto my-16 progress" v-else>
      <v-progress-circular
        color="yellow darken-3"
        size="200"
        width="10"
        indeterminate
      />
    </div>
  </div>
</template>

<script>
import { getMovieSchedule } from "@/services/movieScheduleService";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      movies: null
    };
  },
  mounted() {
    const now = new Date();
    const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    getMovieSchedule({
      channel: "mbc2",
      from: now.getTime(),
      to: nextWeek.getTime()
    }).then(({ data }) => {
      console.log(data);
      this.movies = data;
    });
  },
  methods: {
    getDayName(date) {
      const days = [
        "الاحد",
        "الاثنين",
        "الثلاثاء",
        "الاربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ];
      const d = new Date(date);
      return days[d.getDay()];
    },
    checkTime(t) {
      return t < 10 ? "0" + t : t;
    }
  }
};
</script>

<style scoped>
.progress {
  width: 12em;
}
.rtl {
  direction: rtl;
}
</style>
