<section class="relative text-slate-800 flex flex-col">
    <div class="inset-0 opacity-10 absolute z-[-1] bgGrid" />
    <div class="inset-0 absolute z-[-1] bgGrid2" />
    <div class="text-center px-4 sm:px-6 lg:px-8 py-16 content-sm">
        <h1>
            <slot name="title" />
        </h1>

        <p class="font-light text-txt-gray text-h6 mb-8 lg:mb-16">
            <slot name="subtitle" />
        </p>

        <slot />
    </div>
</section>

<style lang="postcss" scoped>
    .bgGrid {
        background-size: 40px 40px;
        background-image: linear-gradient(to right, #000000 1px, transparent 1px),
            linear-gradient(to bottom, #000000 1px, transparent 1px);
        background-blend-mode: multiply;

        @media screen and (min-width: 976px) {
            background-size: 60px 60px;
        }
    }

    .bgGrid2 {
        background-image: radial-gradient(
            circle at 50% 25%,
            rgba(253, 253, 253, 0.2),
            rgba(253, 253, 253, 0.2) 50%,
            #f9f9f9 75%
        );
        background-blend-mode: overlay;
    }
</style>
