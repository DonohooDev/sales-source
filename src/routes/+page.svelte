<script lang="ts">
    import ButtonLink from "$lib/components/shared/ButtonLink.svelte";
    import CommonChallenges from "$lib/components/home/CommonChallenges.svelte";
    import CompaniesCarousel from "$lib/components/home/CompaniesCarousel.svelte";
    import FrequentlyAskedQuestions from "$lib/components/home/FrequentlyAskedQuestions.svelte";
    import GridBackgroundWrapper from "$lib/components/shared/GridBackgroundWrapper.svelte";
    import Solutions from "$lib/components/home/Solutions.svelte";
    import MobileDashboard from "$lib/assets/virtual-dashboard-alt.png";
    import DesktopDashboard from "$lib/assets/virtual-dashboard-alt-desktop.png";
</script>

<svelte:head>
    <title>Modernize Your Pipeline Creation Processes Permanently | SalesSource</title>
    <meta
        name="description"
        content="Revolutionize your sales strategy with cutting-edge technology and expert guidance."
    />
    <meta
        name="keywords"
        content="sales strategy, pipeline creation, technology, expert guidance"
    />
    <meta property="og:title" content="Modernize Your Pipeline Creation Processes Permanently" />
    <meta
        property="og:description"
        content="Revolutionize your sales strategy with cutting-edge technology and expert guidance."
    />
    <!-- <meta property="og:image" content="/images/og-image.jpg" /> -->
    <meta property="og:url" content="https://salessource.com" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sales Source" />
    <meta property="og:locale" content="en_US" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="text-center content-lg">
        <h1>Modernize Your Pipeline Creation Processes Permanently</h1>

        <p class="text-subtitle">
            Revolutionize your sales strategy with cutting-edge technology and expert guidance.
        </p>

        <div class="w-full mt-14 lg:mt-20">
            <div class="w-fit mx-auto">
                <ButtonLink
                    href="/contact-us"
                    btnText="Schedule a Demo"
                    icon="fa-regular fa-calendar"
                />
            </div>
        </div>
    </section>

    <section class="dashboard">
        <picture>
            <source srcset={DesktopDashboard} media="(min-width: 1024px)" />
            <img
                src={MobileDashboard}
                alt="Virtual Dashboard"
                class="mx-auto w-[300px] md:w-[500px] xl:w-[700px]"
            />
        </picture>
    </section>

    <CompaniesCarousel />

    <CommonChallenges />

    <Solutions />

    <FrequentlyAskedQuestions />
</GridBackgroundWrapper>

<style type="postcss">
    .dashboard {
        @apply m-0 p-0 lg:-mt-4 xl:-mt-8;
    }
</style>
