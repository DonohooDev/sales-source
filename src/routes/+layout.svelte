<script>
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import { page } from "$app/stores";
    import "../app.css";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
</script>

<svelte:head>
    <link rel="canonical" href="https://salessource.com{$page.url.pathname}" />
</svelte:head>

<Header />
<main id="main" class="content">
    <GridBackgroundWrapper>
        <slot />
    </GridBackgroundWrapper>
</main>
<Footer />

<style lang="postcss" scoped>
    .content {
    }
</style>
