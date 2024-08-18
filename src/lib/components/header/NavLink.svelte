<script lang="ts">
    import { getContext } from "svelte";
    import type { HeaderContext } from "../../../types/context/header";

    export let href: string;
    export let text: string;

    const { toggleMenu } = getContext<HeaderContext>("header");
</script>

<li><a {href} on:click={() => toggleMenu(false)}>{text}</a></li>

<style lang="postcss">
    a {
        @apply inline-block text-txt-white px-4 py-2 hocus:text-primary hocus:outline hocus:outline-primary hocus:bg-bg-primary rounded-md;
    }
</style>
