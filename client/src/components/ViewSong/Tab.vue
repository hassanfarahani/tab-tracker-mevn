<template>
    <Panel title="Tab">
        <textarea
            label="Tab"
            class="tab-text-area"
            readonly
            v-model="song.tab"
        ></textarea>
    </Panel>
</template>

<script>

export default {
    props: ['song'],

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