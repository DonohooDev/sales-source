<script lang="ts">
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import CommonChallenges from "$lib/components/home/CommonChallenges.svelte";
    import CompaniesCarousel from "$lib/components/home/CompaniesCarousel.svelte";
    import FrequentlyAskedQuestions from "$lib/components/home/FrequentlyAskedQuestions.svelte";
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import Solutions from "$lib/components/Solutions.svelte";
    import MobileDashboard from "$lib/assets/homepage.webp";
    import DesktopDashboard from "$lib/assets/homepage.webp";
    import MainVideo from "$lib/assets/videos/video_main.mp4";
    import { homeChallenges, homeFAQ, homeSolutions } from "./home";
</script>

<!-- Meta handled in the main app.html file -->

<GridBackgroundWrapper>
    <section class="text-center content-lg">
        <header>
            <h1 id="pipeline-creation" class="max-w-[800px] mx-auto">
                Modernize GTM Strategy to Increase Pipeline
            </h1>
            <p class="text-subtitle max-w-[600px] mx-auto">
                The world’s leading advisory and consulting firm for strategic account-based sales
                development.
            </p>

            <div class="w-full mt-6 md:mt-10 xl:mt-14">
                <div class="w-fit mx-auto">
                    <ButtonLink
                        href="/contact-us"
                        btnText="Get started"
                        icon="fa-light fa-paper-plane text-lg"
                    />
                </div>
            </div>

            <picture class="mt-6 md:mt-10 xl:mt-14">
                <source srcset={DesktopDashboard} media="(min-width: 1024px)" />
                <img
                    src={MobileDashboard}
                    alt="people discussing and working around conference table"
                    width="2309"
                    height="1154"
                    class="w-full mx-auto rounded-md shadow-lg"
                />
            </picture>
        </header>
    </section>

    <CompaniesCarousel />

    <CommonChallenges
        title="Common Challenges"
        subtitle="Identifying and addressing key obstacles in your sales strategy."
        challenges={homeChallenges}
    />

    <Solutions
        title="Our Solutions"
        subtitle="Comprehensive strategies to overcome your sales challenges and drive growth."
        cards={homeSolutions}
    />

    <section>
        <div class="content-md">
            <header>
                <h2 class="">The Critical Role of Pipeline in B2B SaaS</h2>
                <p class="text-subtitle">
                    Why Regular Audits of Your SDR Team Are Crucial for Predictable Growth
                </p>
            </header>

            <video controls disablepictureinpicture loop={false}>
                <source src={MainVideo} type="video/mp4" />
                <track kind="captions" />
            </video>
        </div>
    </section>

    <FrequentlyAskedQuestions
        questions={homeFAQ}
        footerText="Ready to modernize your pipeline creation processes? Contact us today."
    />
</GridBackgroundWrapper>

<style type="postcss">
</style>
