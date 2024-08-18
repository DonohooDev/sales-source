<script lang="ts">
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import type { FAQ } from "../../../types/faq";

    export let title = "Frequently Asked Questions";
    export let subtitle = "Answers to common questions about our services.";
    export let footerText = "We're here to help. Contact us with any questions you have.";
    export let questions: FAQ[];
    let openIndex: number | null = null;

    function toggle(index: number) {
        if (openIndex === index) {
            openIndex = null;
        } else {
            openIndex = index;
        }
    }
</script>

<section>
    <div class="content-sm">
        <h2 id="faq" class="text-center">{title}</h2>
        <p class="text-center text-subtitle">{subtitle}</p>

        <ul class="mt-10 lg:mt-14">
            {#each questions as faq, index}
                <li class="mb-4 lg:mb-6">
                    <details
                        name="faq"
                        class="border rounded-md bg-bg-soft p-4"
                        open={openIndex === index}
                    >
                        <summary
                            on:click|preventDefault|self={() => toggle(index)}
                            class="font-semibold focus:outline-none cursor-pointer flex justify-between items-center"
                        >
                            <span>{faq.question}</span>
                            <span
                                class:rotate-180={openIndex === index}
                                class="transition-transform ease ml-6"
                            >
                                <i class="fa-solid fa-chevron-up" />
                            </span>
                        </summary>

                        <div class="mt-4">
                            <p class="text-subtext">{faq.answer}</p>
                        </div>
                    </details>
                </li>
            {/each}
        </ul>
    </div>

    <div
        class="w-full flex flex-col lg:flex-row justify-between items-center content-sm mt-12 lg:mt-16 lg:gap-8"
    >
        <span class="mb-6 lg:mb-0">
            <p class="text-h5">Still have questions?</p>
            <p class="text-subtext">
                {footerText}
            </p>
        </span>
        <span>
            <ButtonLink href="/contact-us" btnText="Contact Us" />
        </span>
    </div>
</section>

<style lang="postcss">
</style>
