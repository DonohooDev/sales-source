<script lang="ts">
    import GridBackgroundWrapper from "$lib/components/GridBackgroundWrapper.svelte";
    import MobileImage from "$lib/assets/call-support.png";
    import DesktopImage from "$lib/assets/call-support-desktop.png";
    import { enhance } from "$app/forms";

    // ts
    function submitForm(e: Event) {
        e.preventDefault();
        console.log("e :>> ", e);
        // window.grecaptcha.ready(function () {
        //     grecaptcha.execute("reCAPTCHA_site_key", { action: "submit" }).then(function (token) {
        //         const form = e.target as HTMLFormElement;
        //         const formData = new FormData(form);
        //         const data = Object.fromEntries(formData.entries());
        //         console.log(data);
        //     });
        // });
    }

    // }
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
    <script src="https://www.google.com/recaptcha/api.js"></script>
    <meta property="og:title" content="Contact Us" />
    <meta
        property="og:description"
        content="We are here to help you with any questions you may have. Please feel free to reach out to us at any time."
    />
    <meta property="og:url" content="https://salessource.com/contact-us" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sales Source" />
    <meta property="og:locale" content="en_US" />

    <script
        src="https://www.google.com/recaptcha/api.js?render=6LduOu0pAAAAAJNmtufYbta9SPBx2pqhqgXY0hOD"
    ></script>
    <!-- <script>
        function submitForm(e: Event) {
            e.preventDefault();
            window.grecaptcha.ready(function () {
                grecaptcha
                    .execute("reCAPTCHA_site_key", { action: "submit" })
                    .then(function (token) {
                        const form = e.target as HTMLFormElement;
                        const formData = new FormData(form);
                        const data = Object.fromEntries(formData.entries());
                        console.log(data);
                    });
            });
        }
    </script> -->

    <!-- This script is used to submit the form when the reCAPTCHA is completed -->
    <script>
        function onSubmit(token) {
            console.log("token :>> ", token);
            document.getElementById("contact-form").submit();
        }
    </script>
</svelte:head>

<GridBackgroundWrapper>
    <section class="content-lg">
        <div class="mb-20 flex flex-col lg:flex-row lg:gap-20">
            <div>
                <h1>Contact Us</h1>
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

            <!-- <picture>
                <source srcset={DesktopImage} media="(min-width: 1024px)" />
                <img
                    src={MobileImage}
                    alt="Message us today!"
                    class="mx-auto w-[300px] md:w-[500px] xl:w-[700px]"
                />
            </picture> -->
            <img src={MobileImage} alt="Message us today!" class="mx-auto lg:w-[500px]" />
        </div>

        <form id="contact-form" class="form content-xs" autocomplete="off">
            <div class="grid grid-col grid-cols-1 auto-rows-auto gap-x-6 gap-y-8 sm:grid-cols-2">
                <div>
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
                    <label
                        for="description"
                        class="block text-sm font-medium leading-6 text-gray-900">Description</label
                    >
                    <div class="mt-2">
                        <textarea
                            required
                            id="description"
                            name="description"
                            placeholder="Write a few sentences about your situation and how we can help."
                            rows="5"
                            class="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        ></textarea>
                    </div>
                </div>
            </div>

            <button
                class="g-recaptcha"
                data-sitekey="6LduOu0pAAAAAJNmtufYbta9SPBx2pqhqgXY0hOD"
                data-callback="onSubmit"
                data-action="submit">Submit</button
            >

            <!-- <button type="submit" class="g-recaptcha"> Submit </button> -->
        </form>
    </section>
</GridBackgroundWrapper>

<style type="postcss">
    .text-subtitle {
    }

    .form {
    }

    .g-recaptcha {
        @apply w-full md:w-auto mt-8 text-center px-6 md:px-12 py-3 border border-transparent font-semibold rounded-md text-txt-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary;
    }
</style>
