<template>
    <Panel title="YouTube Video">
        <youtube
            :video-id="youtubeId"
            :player-width="500"
            :player-height="330">
        </youtube>
    </Panel>
</template>

<script>
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
    props: ['youtubeId'],
}
</script>

<style scoped>

</style>