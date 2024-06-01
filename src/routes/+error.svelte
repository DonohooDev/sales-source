<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/shared/GridBackgroundWrapper.svelte";
    import MobileImage from "$lib/assets/call-support.png";
</script>

<GridBackgroundWrapper>
    <section class="content-lg">
        <div class="mb-20 flex flex-col lg:flex-row lg:gap-20">
            <div>
                <h1>Error</h1>
                <p class="text-subtitle">
                    We are here to help you with any questions you may have. Please feel free to
                    reach out to us at any time. We will get back to you as soon as possible. To
                    begin, please fill out the form below or email us at <a
                        href="mailto:team@salessource.com"
                    >
                        team@salessource.com.
                    </a>
                </p>
            </div>

            <img src={MobileImage} alt="Message us today!" class="mx-auto lg:w-[500px]" />
        </div>
    </section>
</GridBackgroundWrapper>

<style type="postcss">
</style>
