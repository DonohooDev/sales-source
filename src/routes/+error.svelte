<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
</script>

<svelte:head>
    <title>404 | SalesSource</title>
    <meta
        name="description"
        content="Oops! Looks like you're lost. Let us help you find your way back."
    />
    <meta name="keywords" content="404, not found, lost, help, home" />
    <meta property="og:title" content="404 | SalesSource" />
    <meta
        property="og:description"
        content="Oops! Looks like you're lost. Let us help you find your way back."
    />
    <meta property="og:url" content="https://salessource.com/404" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sales Source" />
    <meta property="og:locale" content="en_US" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <header>
            <h1>404</h1>
            <p class="text-subtitle">
                Oops! Looks like you're lost. Let us help you find your way back.
            </p>
        </header>

        <div class="w-full my-14 lg:my-20">
            <span class="inline-block">
                <ButtonLink href="/" btnText="Go Home" icon="fa-light fa-home text-lg" />
            </span>
        </div>
    </section>
</GridBackgroundWrapper>

<style type="postcss">
</style>
