<template>
    <v-layout class="row mt-8">
        <v-flex v-if="isUserLoggedIn">
            <SongsBookmarks />
            <RecentlyViewedSongs class="mt-2" />
        </v-flex>
      <v-flex :class="{xs12: !isUserLoggedIn, xs6: isUserLoggedIn}" class="ml-2">
          <SongsSearchPanel />
          <SongsPanel class="mt-2" />
      </v-flex>
    </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import SongsService from '@/services/SongsService'
import SongsPanel from '@/components/Songs/SongsPanel.vue'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel.vue'
import SongsBookmarks from '@/components/Songs/SongsBookmarks.vue'
import RecentlyViewedSongs from '@/components/Songs/RecentlyViewedSongs.vue'

export default {
    data() {
        return {
            songs: []
        }
    },
    computed: {
        ...mapState(['isUserLoggedIn'])
    },
    components: {
        SongsPanel,
        SongsSearchPanel,
        SongsBookmarks,
        RecentlyViewedSongs
    },
    async mounted() {
        this.songs = (await SongsService.index()).data
    }
}
</script>

<style scoped>
.song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
}

.song-title {
    font-size: 30px;
}

.song-artist {
    font-size: 24px;
}

.song-genre {
    font-size: 18px;
}

.album-image {
    width: 70%;
    margin: 0 auto;
}
</style>