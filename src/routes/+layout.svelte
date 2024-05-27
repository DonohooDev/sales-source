<script>
    import "../app.css";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
</script>

<Header />
<main class="content">
    <slot />
</main>
<Footer />

<style lang="postcss" scoped>
    .content {
    }
</style>
