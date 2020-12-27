<template>
  <div class="home">
    <v-card>
      <v-toolbar flat color="blue darken-1" dark>
        <v-spacer />
        <v-toolbar-title>جدول البرامج</v-toolbar-title>
      </v-toolbar>
      <v-tabs v-model="tab" touchless>
        <v-tab key="mbc1">
          MBC 1
        </v-tab>

        <v-tab key="mbc2">
          MBC 2
        </v-tab>

        <v-tab key="mbc4">
          MBC 4
        </v-tab>

        <v-tab key="mbc5">
          MBC 5
        </v-tab>

        <v-tab key="mbc-action">
          MBC Action
        </v-tab>

        <v-tab key="mbc-max">
          MBC Max
        </v-tab>

        <v-tab key="mbc-drama">
          MBC Drama
        </v-tab>

        <v-tab key="mbc-drama-plus">
          MBC Drama +
        </v-tab>

        <v-tab key="mbc-maser">
          MBC Masr
        </v-tab>

        <v-tab key="mbc-maser2">
          MBC Masr 2
        </v-tab>

        <v-tab key="mbc-bollywood">
          MBC Bollywood
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" touchless>
        <v-tab-item key="mbc1">
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc1" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item key="mbc2">
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc2" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item key="mbc4">
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc4" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item key="mbc5">
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc5" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item key="mbc-action">
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-action" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item key="mbc-max">
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-max" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item key="mbc-drama">
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-drama" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item key="mbc-drama-plus">
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-drama-plus" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item key="mbc-maser">
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-maser" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item key="mbc-maser2">
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-maser2" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item key="mbc-bollywood">
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-bollywood" />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import ChannelTab from "@/components/ChannelTab";
export default {
  name: "Home",
  components: {
    ChannelTab
  },
  data() {
    return {
      tab: undefined
    };
  },
  mounted() {
    this.tab = 1;
  }
};
</script>
