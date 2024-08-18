<script lang="ts">
    import ProcoreLogo from "$lib/assets/logos/companies-carousel/procore.svg";
    import AsanaLogo from "$lib/assets/logos/companies-carousel/asana.svg";
    import ZoomLogo from "$lib/assets/logos/companies-carousel/zoom.svg";
    import LiveRampLogo from "$lib/assets/logos/companies-carousel/liveramp.svg";
    import UberLogo from "$lib/assets/logos/companies-carousel/uber.svg";
    import UnityLogo from "$lib/assets/logos/companies-carousel/unity.svg";
    import ConfluentLogo from "$lib/assets/logos/companies-carousel/confluent.svg";
    import IntappLogo from "$lib/assets/logos/companies-carousel/intapp.svg";
    import AnvilogicLogo from "$lib/assets/logos/companies-carousel/anvilogic.svg";

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
                loop: true,
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

<section class="companies-carousel">
    <span class="block md:-mt-8">
        <h2 id="trusted-by" class="text-center">Trusted by Leading Companies</h2>
        <p class="text-subtitle text-center">
            We are proud to have worked with some of the world's best and most innovative companies.
        </p>
    </span>

    <div
        class="relative"
        use:Carousel={{ options: carouselOptions, plugins: [] }}
        on:emblaInit={onInitCarousel}
    >
        <div class="carousel-viewport">
            <div class="carousel-container">
                <div class="carousel-slide">
                    <img src={UnityLogo} alt="Unity Logo" />
                </div>
                <div class="carousel-slide">
                    <img src={AsanaLogo} alt="Asana Logo" />
                </div>
                <div class="carousel-slide">
                    <img src={ZoomLogo} alt="Zoom Logo" />
                </div>
                <div class="carousel-slide">
                    <img src={LiveRampLogo} alt="LiveRamp Logo" />
                </div>
                <div class="carousel-slide">
                    <img src={UberLogo} class="p-6" alt="Uber Logo" />
                </div>
                <div class="carousel-slide">
                    <img src={ProcoreLogo} alt="Procore Logo" />
                </div>
                <div class="carousel-slide">
                    <img src={UnityLogo} alt="Procore Logo" />
                </div>
                <div class="carousel-slide">
                    <img src={ConfluentLogo} alt="Confluent Logo" />
                </div>
                <div class="carousel-slide">
                    <img src={AnvilogicLogo} alt="Anvilogic Logo" />
                </div>
                <div class="carousel-slide">
                    <img src={IntappLogo} alt="Intapp Logo" />
                </div>
            </div>

            {#if activeSlide !== 0}
                <!-- Previous -->
                <button
                    type="button"
                    class="absolute top-1/2 -translate-y-1/2 left-6 hover:text-txt-hover"
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
                    class="absolute top-1/2 -translate-y-1/2 right-6 hover:text-txt-hover"
                    aria-label="next slide"
                    on:click={onClickNext}
                >
                    <DefaultIcon classNames="fa-solid fa-chevron-up fa-rotate-90" />
                </button>
            {/if}
        </div>
    </div>
</section>

<style type="postcss">
    .companies-carousel {
        @apply relative bg-bg-soft;
    }

    .carousel-viewport {
        @apply overflow-hidden drop-shadow-xl;
    }

    .carousel-container {
        @apply flex touch-pan-y touch-pinch-zoom md:mx-8 xl:mx-16;
    }

    .carousel-slide {
        @apply flex items-center basis-full min-w-0 grow-0 shrink-0 md:basis-1/3 xl:basis-1/5;

        & img {
            @apply w-40 mx-auto;
        }
    }
</style>
