<script lang="ts">
    import ButtonLink from "../ButtonLink.svelte";

    let faqs = [
        {
            question: "Do you offer hourly consulting?",
            answer: "We focus on long-term GTM transformation, not ad hoc work.",
        },
        {
            question: "What is the cost of working with SalesSource?",
            answer: "The audit has a flat fee, future services are scoped and billed separately.",
        },
        {
            question: "How long does an audit take?",
            answer: "Typically, 4-6 weeks, depending on the scope and complexity.",
        },
        {
            question: "What is included in the audit?",
            answer: "Comprehensive review of your GTM strategy, tech stack, and processes.",
        },
    ];
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
        <h2 class="text-center">Frequently Asked Questions</h2>
        <p class="text-center text-subtitle">Answers to common questions about our services.</p>

        <ul class="mt-10 lg:mt-14">
            {#each faqs as faq, index}
                <li class="mb-4 lg:mb-6">
                    <details
                        name="home-faq"
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
        class="w-full flex flex-col lg:flex-row align-center justify-between content-sm mt-12 lg:mt-16"
    >
        <span class="mb-6 lg:mb-0">
            <p class="text-h5">Still have questions?</p>
            <p class="text-subtext">
                Ready to modernize your pipeline creation processes? Contact us today.
            </p>
        </span>
        <span>
            <ButtonLink href="/contact-us" btnText="Contact Us" />
        </span>
    </div>
</section>

<style lang="postcss">
</style>
