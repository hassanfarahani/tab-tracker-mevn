<template>
    <Panel title="Songs">
        <v-btn
            slot="action"
            @click="$router.push({name: 'Songs-Create'})"
            fab
            light
            absolute
            right
            middle
            class="cyan accent-2">
            <v-icon>add</v-icon>
        </v-btn>
        <div
            v-for="song in songs"
            :key="song._id"
            class="song">
            <v-layout>
                <v-flex xs6>
                    <div class="song-title">
                        {{ song.title }}
                    </div>
                    <div class="song-artist">
                        {{ song.artist }}
                    </div>
                    <div class="song-genre">
                        {{ song.genre }}
                    </div>
                    <v-btn
                        dark
                        class="cyan"
                        :to="{ name: 'Song', params: {songId: song._id}}">
                            View
                    </v-btn>
                </v-flex>
                <v-flex xs6>
                    <img class="album-image" :src="song.albumImageUrl">
                </v-flex>
            </v-layout>
        </div>
    </Panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
    data() {
        return {
            songs: null
        }
    },
    computed: {
        search() {
            return this.$route.query.search
        }
    },
    watch: {
        search: {
            immediate: true,
            async handler(value) {
               this.songs = (await SongsService.index(value)).data
            }
        }
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