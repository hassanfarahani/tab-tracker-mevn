<template>
    <div>
        <v-layout>
            <v-flex xs6>
                <SongMetadata :song="song" />
            </v-flex>
            <v-flex xs6 class="ml-2">
                <YouTube :youtubeId="song.youtubeId" />
            </v-flex>
        </v-layout>

        <v-layout>
            <v-flex xs6 class="mt-2">
                <Tab :song="song" />
            </v-flex>
            <v-flex xs6 class="ml-2 mt-2">
                <Lyrics :song="song" />
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
import SongMetadata from '@/components/ViewSong/SongMetadata.vue'
import YouTube from '@/components/ViewSong/YouTube.vue'
import Lyrics from '@/components/ViewSong/Lyrics.vue'
import Tab from '@/components/ViewSong/Tab.vue'
import { mapState } from 'vuex'


export default {
    data() {
        return {
            song: {}
        }
    },
    computed: {
        ...mapState(['isUserLoggedIn','user'])
    },
    async created() {
        const songId = this.$route.params.songId
        this.song = (await SongsService.show(songId)).data

        if (this.isUserLoggedIn) {
            SongHistoryService.post({
                songId,
                userId: this.user._id
            })
        }
    },
    components: {
        SongMetadata,
        YouTube,
        Lyrics,
        Tab
    }
}
</script>

<style scoped>
.tab-text-area {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 20px;
}
</style>