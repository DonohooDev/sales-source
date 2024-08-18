<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import ContactUs from "$lib/assets/contact-us.svg";
    import emailjs from "@emailjs/browser";

    let isSending = false;

    async function handleSubmit(event: Event) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        if (formData.get("misdirection")) {
            // If our honeypot field is filled out, we know it's a bot
            return;
        }

        try {
            isSending = true;
            const res = await emailjs.sendForm("postmark_salessource", "template_send_to", form, {
                publicKey: "53NATUVye_stFZOXW",
            });
            console.debug("EmailJS res :>> ", res);

            if (res.status === 200) {
                form.reset();

                // Show success message
                alert("Your message has been sent. We will get back to you as soon as possible.");
            }
        } catch (error) {
            console.error(error);
        } finally {
            isSending = false;
        }
    }
</script>

<svelte:head>
    <title>Contact Us | SalesSource</title>
    <meta
        name="description"
        content="We are here to help you with any questions you may have. Please feel free to reach out to us at any time."
    />
    <meta
        name="keywords"
        content="contact us, sales, sales source, sales source contact, sales source contact us"
    />
    <meta property="og:title" content="Contact Us" />
    <meta
        property="og:description"
        content="We are here to help you with any questions you may have. Please feel free to reach out to us at any time."
    />
    <meta property="og:url" content="https://salessource.com/contact-us" />
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <div class="mb-20 flex flex-col lg:flex-row lg:gap-20">
            <header>
                <h1 id="cotact-us">Contact Us</h1>
                <p class="text-subtitle">
                    We are strategically positioned to help you with your sales and marketing needs.
                    Our team of experts is here to help you with any questions you may have. Please
                    feel free to reach out to us at any time. We will get back to you as soon as
                    possible. To begin, please fill out the form below or email us at <a
                        href="mailto:team@salessource.com"
                    >
                        team@salessource.com.
                    </a>
                </p>
            </header>

            <img
                src={ContactUs}
                alt="Message us today!"
                width="500"
                height="400"
                class="hidden md:block absolute rotate-12 opacity-50 right-[5%] top-[50%] -translate-y-[50%]"
            />
        </div>

        <form
            id="contact-form"
            class="form content-xs"
            on:submit|preventDefault={handleSubmit}
            autocomplete="off"
        >
            <div class="grid grid-col grid-cols-1 auto-rows-auto gap-x-6 gap-y-8 sm:grid-cols-2">
                <!-- <div>
                    <label
                        for="first-name"
                        class="block text-sm font-medium leading-6 text-gray-900">First name</label
                    >
                    <div class="mt-2">
                        <input
                            required
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"
                        >Last name</label
                    >
                    <div class="mt-2">
                        <input
                            required
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div> -->
                <div class="sm:col-span-2">
                    <label for="from-name" class="block text-sm font-medium leading-6 text-gray-900"
                        >Full name</label
                    >
                    <div class="mt-2">
                        <input
                            required
                            type="text"
                            name="from-name"
                            id="from-name"
                            autocomplete="family-name"
                            class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                        >Email address</label
                    >
                    <div class="mt-2">
                        <input
                            required
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <label for="message" class="block text-sm font-medium leading-6 text-gray-900"
                        >Message</label
                    >
                    <div class="mt-2">
                        <textarea
                            required
                            id="message"
                            name="message"
                            placeholder="Write a few sentences about your situation and how we can help."
                            rows="5"
                            class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        ></textarea>
                    </div>
                </div>

                <div>
                    <input type="text" name="misdirection" class="hidden" />
                </div>
            </div>

            <button disabled={isSending} type="submit" class="button"
                ><span
                    class:hidden={!isSending}
                    class="absolute left-0 inset-y-0 flex items-center pl-5"
                    ><i class="fa-solid fa-spinner fa-spin" /></span
                > Submit
            </button>
        </form>
    </section>
</GridBackgroundWrapper>

<style type="postcss">
    .text-subtitle {
    }

    .form {
    }

    .button {
        @apply relative w-full md:w-auto mt-4 text-center px-6 md:px-12 py-3 border border-transparent font-semibold rounded-md text-txt-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary;

        &[disabled] {
            @apply cursor-not-allowed opacity-50;
        }
    }
</style>
