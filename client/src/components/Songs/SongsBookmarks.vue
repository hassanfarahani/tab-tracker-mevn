<template>
    <Panel title="Bookmarks">
        <v-data-table
            :headers="headers"
            :items="bookmarks"
            :items-per-page="5"
            :sort-by="['createdAt']"
            :sort-desc="[false]"
            class="elevation-1"
        ></v-data-table>
    </Panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarkService from '@/services/BookmarkService'

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
        bookmarks: [
            {
                songId: {
                    title: 'Hello World',
                    artist: 'testing'
                },
                createdAt: '2021-03-05T16:07:38.850Z'
            }
        ],
      }
    },
    computed: {
        ...mapState(['isUserLoggedIn', 'user'])
    },
    async mounted() {
        if (this.isUserLoggedIn) {
            this.bookmarks = (await BookmarkService.index({
                // userId: this.user._id
            })).data
        }
    }
  }
</script>

<style scoped>

</style>