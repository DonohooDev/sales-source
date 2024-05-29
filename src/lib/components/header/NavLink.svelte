<script lang="ts">
    export let href: string;
    export let text: string;
</script>

<li><a {href}>{text}</a></li>

<style lang="postcss">
    a {
        @apply inline-block text-txt-white px-4 py-2 hocus:text-primary hocus:outline hocus:outline-primary hocus:bg-bg-primary rounded-md;
    }
</style>
