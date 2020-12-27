<template>
  <div class="home">
    <v-card>
      <v-toolbar flat color="blue darken-1" dark>
        <v-spacer />
        <v-toolbar-title>جدول البرامج</v-toolbar-title>
      </v-toolbar>
      <v-tabs v-model="defaultTab" vertical>
        <v-tab>
          MBC 1
        </v-tab>

        <v-tab>
          MBC 2
        </v-tab>

        <v-tab>
          MBC 4
        </v-tab>

        <v-tab>
          MBC 5
        </v-tab>

        <v-tab>
          MBC Action
        </v-tab>

        <v-tab>
          MBC Max
        </v-tab>

        <v-tab>
          MBC Drama
        </v-tab>

        <v-tab>
          MBC Drama +
        </v-tab>

        <v-tab>
          MBC Masr
        </v-tab>

        <v-tab>
          MBC Masr 2
        </v-tab>

        <v-tab>
          MBC Bollywood
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc1" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc2" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc4" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc5" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-action" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-max" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-drama" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-drama-plus" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-maser" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-maser2" />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ChannelTab channel="mbc-bollywood" />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
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
      defaultTab: null
    };
  },
  mounted() {
    this.defaultTab = 1;
  }
};
</script>
