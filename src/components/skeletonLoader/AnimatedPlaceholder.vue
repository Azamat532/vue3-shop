<template>
    <div :style="{'height': heigth,'width': width,'margin': margin,}" class="placeholder">
        &nbsp;
    </div>
</template>

<script setup>
defineProps({
    heigth: {
        type: String,
    },
    width: {
        type: String,
    },
    margin: {
        type: String,
    }
})
</script>

