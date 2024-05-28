<script lang="ts">
    import boltshiftLogo from "$lib/assets/logos/boltshift-logo.png";
    import DefaultIcon from "$lib/components/DefaultIcon.svelte";
    import type { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from "embla-carousel";
    import Carousel from "embla-carousel-svelte";

    let carouselApi: EmblaCarouselType;
    let activeSlide = 0;
    let totalSlides = 0;
    const carouselOptions: EmblaOptionsType = {
        loop: false,
        container: ".carousel-container",
        duration: 20,
        breakpoints: {
            "screen and (min-width: 976px)": {
                active: false,
            },
        },
    };
    function onEmblaEvent(api: EmblaCarouselType, _eventName: EmblaEventType) {
        activeSlide = api.selectedScrollSnap();
    }
    function onInitCarousel(event: any) {
        carouselApi = event.detail;
        carouselApi.on("slidesInView", onEmblaEvent);
        totalSlides = carouselApi.slideNodes().length - 1;
    }
    function onClickPrev() {
        carouselApi.scrollPrev();
    }
    function onClickNext() {
        carouselApi.scrollNext();
    }
</script>

<section
    class="carousel"
    use:Carousel={{ options: carouselOptions, plugins: [] }}
    on:emblaInit={onInitCarousel}
>
    <div class="carousel-viewport">
        <p class="text-center text-subtext mb-8 lg:mb-10">Trusted by leading companies</p>

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
        </div>

        {#if activeSlide !== 0}
            <!-- Previous -->
            <button
                type="button"
                class="absolute top-2/4 left-6 hover:text-txt-hover lg:hidden"
                aria-label="previous slide"
                on:click={onClickPrev}
            >
                <DefaultIcon classNames="fa-solid fa-chevron-up fa-rotate-270" />
            </button>
        {/if}

        {#if activeSlide !== totalSlides}
            <!-- Next -->
            <button
                type="button"
                class="absolute top-2/4 right-6 hover:text-txt-hover lg:hidden"
                aria-label="next slide"
                on:click={onClickNext}
            >
                <DefaultIcon classNames="fa-solid fa-chevron-up fa-rotate-90" />
            </button>
        {/if}
    </div>
</section>

<style type="postcss">
    .carousel {
        @apply relative bg-bg-soft pt-6 pb-10 lg:pt-10 lg:pb-14;
    }

    .carousel-viewport {
        @apply overflow-hidden lg:max-w-[1400px] lg:mx-auto;
    }

    .carousel-container {
        @apply flex touch-pan-y touch-pinch-zoom lg:gap-6 md:mx-8 lg:mx-12;
    }

    .carousel-slide {
        @apply basis-full min-w-0 grow-0 shrink-0 md:basis-1/3 lg:flex-1;

        & img {
            @apply w-40 mx-auto;
        }
    }
</style>
