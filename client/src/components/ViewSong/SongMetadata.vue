<template>
    <Panel title="Song Metadata">
        <v-layout>
            <v-flex xs8>
                <div class="song-title">
                    {{ song.title }}
                </div>
                <div class="song-artist">
                    {{ song.artist }}
                </div>
                <div class="song-genre mb-3">
                    {{ song.genre }}
                </div>
                <v-btn
                    dark
                    class="cyan"
                    :to="{ name: 'Song-Edit',
                           params() {
                               return { songId: song._id }
                           }
                    }">
                        Edit
                </v-btn>
                <v-btn
                    dark
                    v-if="isUserLoggedIn && !bookmark"
                    class="cyan ml-3"
                    @click="setAsBookmark"
                    >
                        Set As Bookmark
                </v-btn>
                <v-btn
                    v-if="isUserLoggedIn && bookmark"
                    dark
                    class="cyan ml-3"
                    @click="unsetAsBookmark"
                    >
                        Unset As Bookmark
                </v-btn>
            </v-flex>
            <v-flex xs4>
                <img class="album-image" :src="song.albumImageUrl">
                <br>
                {{ song.album }}
            </v-flex>
        </v-layout>
    </Panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarkService from '@/services/BookmarkService'

export default {
    props: ['song'],
    computed: {
        ...mapState(['isUserLoggedIn', 'user'])
    },
    data() {
        return {
            bookmark: null
        }
    },
    methods: {
        async setAsBookmark() {
            try {
                this.bookmark = (await BookmarkService.post({
                        songId: this.song._id,
                        userId: this.user._id
                })).data
            } catch (error) {
                console.log(error)
            }
        },
        async unsetAsBookmark() {
            try {
                await BookmarkService.delete(this.bookmark._id)
                this.bookmark = null
            } catch (error) {
                console.log(error)
            }
        },
    },
    watch: {
        async song() {
            if (!this.isUserLoggedIn) {
                return
            }

            try {
                const bookmarks = (await BookmarkService.index({
                    songId: this.song._id,
                    userId: this.user._id
                })).data
                if (bookmarks.length) {
                    this.bookmark = bookmarks[0]
                }
            } catch(error) {
                console.log(error)
            }
        }
    },
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