<template>
  <div>
    <div class="container" v-if="movies">
      <v-card
        v-for="movie in movies"
        :key="movie.id"
        class="mx-auto my-8 py-4"
        color="grey lighten-3"
      >
        <div v-if="movie.showingNow" class="copy-box">
          <div class="inner">
            <div class="line right">
              <div class="scanner"></div>
            </div>
            الآن
          </div>
        </div>
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
  name: "ChannelTab",
  props: ["channel"],
  data() {
    return {
      movies: null
    };
  },
  mounted() {
    const now = new Date();
    const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    getMovieSchedule({
      channel: this.$props.channel,
      from: now.getTime(),
      to: nextWeek.getTime()
    }).then(({ data }) => {
      this.movies = data.map((item, index) => ({
        ...item,
        showingNow: index === 0
      }));
      console.log(this.movies);
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

.copy-box {
  position: relative;
  display: inline-block;
  margin: 0 auto;
  width: 200px;
  color: #333333;
  font-family: sans-serif;
  padding: 20px;
}
.copy-box .line {
  position: absolute;
  background-color: rgb(255, 123, 0);
  box-shadow: 0px 0px 12px rgb(255, 123, 0);
  width: 4px;
  height: calc(100% - 20px);
  top: 10px;
  left: 22px;
  border-radius: 50%;
  overflow: hidden;
}
.copy-box .line .scanner {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 20px;
  border-radius: 50%;
  animation: scanner-loop 3s ease-in-out infinite;
}

@keyframes scanner-loop {
  0% {
    top: -20%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: -20%;
  }
}
.copy-box .inner {
  padding: 30px;
}
</style>
