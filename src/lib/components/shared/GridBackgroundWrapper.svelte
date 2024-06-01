<script lang="ts">
</script>

<div class="hero-wrapper">
    <slot />
</div>

<style lang="postcss">
    .hero-wrapper {
        @apply relative flex flex-col w-full;
        background-image: url("$lib/assets/grid-background.svg");
        background-position: center top;
        background-repeat: no-repeat;
    }
</style>
