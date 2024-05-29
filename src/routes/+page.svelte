<script lang="ts">
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import CommonChallenges from "$lib/components/home/CommonChallenges.svelte";
    import CompaniesCarousel from "$lib/components/home/CompaniesCarousel.svelte";
    import FrequentlyAskedQuestions from "$lib/components/home/FrequentlyAskedQuestions.svelte";
    import HeroWrapper from "$lib/components/HeroWrapper.svelte";
    import Solutions from "$lib/components/home/Solutions.svelte";
</script>

<svelte:head>
    <title>Modernize Your Pipeline Creation Processes Permanently</title>
    <meta
        name="description"
        content="Revolutionize your sales strategy with cutting-edge technology and expert guidance."
    />
    <meta
        name="keywords"
        content="sales strategy, pipeline creation, technology, expert guidance"
    />
    <meta name="robots" content="index, follow" />
</svelte:head>

<HeroWrapper>
    <div class="text-center content-sm">
        <h1>Modernize Your Pipeline Creation Processes Permanently</h1>

        <p class="text-subtitle">
            Revolutionize your sales strategy with cutting-edge technology and expert guidance.
        </p>

        <div class="w-full mt-14 lg:mt-20">
            <div class="w-fit mx-auto">
                <ButtonLink
                    href="/contact"
                    btnText="Schedule a Demo"
                    icon="fa-regular fa-calendar"
                />
            </div>
        </div>
    </div>
</HeroWrapper>

<CompaniesCarousel />

<CommonChallenges />

<Solutions />

<FrequentlyAskedQuestions />

<style type="postcss">
</style>
