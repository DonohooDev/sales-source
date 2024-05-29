<section class="hero-wrapper">
    <slot />
</section>

<style lang="postcss" scoped>
    .hero-wrapper {
        @apply relative flex flex-col;
        background-image: url("$lib/assets/grid-background.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
