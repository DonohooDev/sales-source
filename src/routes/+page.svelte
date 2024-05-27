<script lang="ts">
    import boltshiftLogo from "$lib/assets/logos/boltshift-logo.png";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import HeroWrapper from "$lib/components/HeroWrapper.svelte";
    import type { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from "embla-carousel";
    import Carousel from "embla-carousel-svelte";

    let carouselApi: EmblaCarouselType;
    let activeSlide = 0;
    const carouselOptions: EmblaOptionsType = { loop: false, containScroll: true, duration: 20 };
    const onEmblaEvent = (api: EmblaCarouselType, _eventName: EmblaEventType) => {
        activeSlide = api.selectedScrollSnap();
    };
    const onInitCarousel = (event: any) => {
        carouselApi = event.detail;
        carouselApi.on("slidesInView", onEmblaEvent);
    };
</script>

<HeroWrapper>
    <span slot="title">Modernize Your Pipeline Creation Processes Permanently</span>
    <span slot="subtitle"
        >Revolutionize your sales strategy with cutting-edge technology and expert guidance.</span
    >

    <div class="w-full">
        <div class="w-fit mx-auto">
            <ButtonLink href="/contact" btnText="Schedule a Demo" icon="fa-regular fa-calendar" />
        </div>
    </div>
</HeroWrapper>

<!-- <div class="hidden lg:block bg-bg-secondary overflow-hidden">
    <div class="content-xl flex justify-around items-center gap-12 pt-12 pb-12">
        <img src={boltshiftLogo} alt="Boltshift Logo" class="w-40" />
        <img src={boltshiftLogo} alt="Boltshift Logo" class="w-40" />
        <img src={boltshiftLogo} alt="Boltshift Logo" class="w-40" />
        <img src={boltshiftLogo} alt="Boltshift Logo" class="w-40" />
        <img src={boltshiftLogo} alt="Boltshift Logo" class="w-40" />
        <img src={boltshiftLogo} alt="Boltshift Logo" class="w-40" />
    </div>
</div> -->

<section
    class="carousel content-xl"
    use:Carousel={{ options: carouselOptions, plugins: [] }}
    on:emblaInit={onInitCarousel}
>
    <!-- <div class="content-xl carousel-viewport"> -->
    <div class="carousel-container">
        <div class="carousel-slide">
            <img src={boltshiftLogo} alt="Boltshift Logo" />
        </div>
        <div class="carousel-slide">
            <img src={boltshiftLogo} alt="Boltshift Logo" />
        </div>
        <div class="carousel-slide">
            <img src={boltshiftLogo} alt="Boltshift Logo" />
        </div>
        <div class="carousel-slide">
            <img src={boltshiftLogo} alt="Boltshift Logo" />
        </div>
        <div class="carousel-slide">
            <img src={boltshiftLogo} alt="Boltshift Logo" />
        </div>
        <div class="carousel-slide">
            <img src={boltshiftLogo} alt="Boltshift Logo" />
        </div>
        <!-- </div> -->

        {#if activeSlide !== 0}
            <!-- Previous -->
            <button
                type="button"
                class="absolute top-2/4 left-6 -translate-y-1/2 text-txt-gray hover:text-txt-hover"
                aria-label="previous slide"
                on:click={() => carouselApi.scrollPrev()}
                ><i class="fa-solid fa-chevron-up fa-rotate-270" />
            </button>
        {/if}

        {#if activeSlide !== 2}
            <!-- Next -->
            <button
                type="button"
                class="absolute top-2/4 right-6 -translate-y-1/2 text-txt-gray hover:text-txt-hover"
                aria-label="next slide"
                on:click={() => carouselApi.scrollNext()}
                ><i class="fa-solid fa-chevron-up fa-rotate-90" />
            </button>
        {/if}
    </div>
</section>

<style type="postcss">
    .carousel {
        @apply bg-bg-secondary relative;
    }

    .carousel-viewport {
        @apply relative overflow-hidden;
    }

    .carousel-container {
        @apply flex pt-12 pb-12 touch-pan-y touch-pinch-zoom;
    }

    .carousel-slide {
        @apply basis-full min-w-0 grow-0 shrink-0;

        & img {
            @apply w-40 mx-auto;
        }
    }
</style>
