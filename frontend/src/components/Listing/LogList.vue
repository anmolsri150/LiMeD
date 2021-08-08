<template>
<table class="table table-sm table-borderless">
    <tbody>
        <tr v-for="(log, index) in logs" :log="log" :key="index">
            <td>
                <span :class="`log-indicator align-middle ${log.color}`" />
            </td>
            <td>
                <span class="font-weight-medium">{{ log.label }}</span>
            </td>
            <td class="text-right">
                <span class="text-muted">{{ log.time }}</span>
            </td>
        </tr>
    </tbody>
</table>
</template>

<script>
export default {
    props: ['logs']
}
</script>
