<template>
    <Panel title="Recently Viewed Songs">
        <v-data-table
            :headers="headers"
            :items="songs"
            :items-per-page="5"
            :sort-by="['createdAt']"
            :sort-desc="[false]"
            class="elevation-1"
        ></v-data-table>
    </Panel>
</template>

<script>
import { mapState } from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'

  export default {
    data () {
      return {
        headers: [
          {
            text: 'Title',
            align: 'start',
            sortable: false,
            value: 'songId.title',
          },
          { text: 'Artist', value: 'songId.artist' },
        ],
        songs: [
            {
                songId: {
                    title: '',
                    artist: ''
                },
                createdAt: ''
            }
        ],
      }
    },
    computed: {
        ...mapState(['isUserLoggedIn', 'user'])
    },
    async mounted() {
        if (this.isUserLoggedIn) {
            this.songs = (await SongHistoryService.index({
                // userId: this.user._id
            })).data
        }
    }
  }
</script>

<style scoped>

</style>