<script>
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import "../app.css";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
</script>

<Header />
<main class="content">
    <GridBackgroundWrapper>
        <slot />
    </GridBackgroundWrapper>
</main>
<Footer />

<style lang="postcss" scoped>
    .content {
    }
</style>
