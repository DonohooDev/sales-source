<script lang="ts">
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import CommonChallenges from "$lib/components/CommonChallenges.svelte";
    import CompaniesCarousel from "$lib/components/CompaniesCarousel.svelte";
    import HeroWrapper from "$lib/components/HeroWrapper.svelte";
    import Solutions from "$lib/components/Solutions.svelte";
</script>

<HeroWrapper>
    <span slot="title">Modernize Your Pipeline Creation Processes Permanently</span>
    <span slot="subtitle"
        >Revolutionize your sales strategy with cutting-edge technology and expert guidance.</span
    >

    <div class="w-full mt-14 lg:mt-20">
        <div class="w-fit mx-auto">
            <ButtonLink href="/contact" btnText="Schedule a Demo" icon="fa-regular fa-calendar" />
        </div>
    </div>
</HeroWrapper>

<CompaniesCarousel />

<CommonChallenges />

<Solutions />

<style type="postcss">
</style>
