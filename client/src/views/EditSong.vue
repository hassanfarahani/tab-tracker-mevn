<template>
    <v-layout>
        <v-flex xs4>
            <Panel title="Song Metadata">
                <v-text-field
                    label="Title"
                    required
                    :rules="[required]"
                    v-model="song.title"
                ></v-text-field>
                <v-text-field
                    label="Artist"
                    required
                    :rules="[required]"
                    v-model="song.artist"
                ></v-text-field>
                <v-text-field
                    label="Genre"
                    required
                    :rules="[required]"
                    v-model="song.genre"
                ></v-text-field>
                <v-text-field
                    label="Album"
                    required
                    :rules="[required]"
                    v-model="song.album"
                ></v-text-field>
                <v-text-field
                    label="Album Image Url"
                    required
                    :rules="[required]"
                    v-model="song.albumImageUrl"
                ></v-text-field>
                <v-text-field
                    label="YouTube ID"
                    required
                    :rules="[required]"
                    v-model="song.youtubeId"
                ></v-text-field>
            </Panel>
        </v-flex>
        <v-flex xs8 class="ml-2 centerContent">
            <Panel title="Song structure" class="mb-2">
                <v-textarea
                    label="Tab"
                    required
                    :rules="[required]"
                    v-model="song.tab"
                ></v-textarea>
                <v-textarea
                    label="Lyrics"
                    required
                    :rules="[required]"
                    v-model="song.lyrics"
                ></v-textarea>
            </Panel>
            <div class="danger-alert" v-if="error">{{ error }}</div>
            <v-btn dark class="cyan" @click="saves">Save Song</v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService.js'

export default {
    data() {
        return {
            test: 'aks',
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null
            },
            required: (value) => !!value || 'Required.',
            error: null
        }
    },
    methods: {
        async saves() {
            this.error = null
            const areAllFieldsFilledIn = Object.keys(this.song).every(key => this.test)
            if (!areAllFieldsFilledIn) {
                this.error = 'Please fill in all the required fields.'
                return
            }
            try {
                const songId = this.$route.params.songId
                await SongsService.put(this.song)
                this.$router.push({ name: 'Song', params: { songId }})
            } catch(error) {
                console.log(error)
            }
        }
    },
    async mounted() {
        try {
            const songId = this.$route.params.songId
            this.song = (await SongsService.show(songId)).data
        } catch(error) {
            console.log(error)
        }
    },
}
</script>

<style scoped>
.danger-alert {
    color: red;
}
</style>