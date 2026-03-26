<script lang="ts">
    import logo from "$lib/assets/logos/sales-source-logo.png";
    import CopyrightText from "$lib/components/CopyrightText.svelte";
</script>

<footer>
    <div class="flex flex-col md:flex-row md:gap-12 lg:gap-16 2xl:gap-24 content-lg">
        <span class="flex-1">
            <img src={logo} alt="SalesSource logo" class="w-40 mb-3" />
            <p class="text-subtext">
                SalesSource is the premium source of comprehensive go to market strategies and
                implementation.
            </p>
        </span>

        <nav class="footer-nav">
            <ul class="list-none">
                <p class="font-bold">Company</p>
                <li><a href="/privacy-policy" class="text-subtext">Privacy Policy</a></li>
            </ul>
        </nav>

        <nav class="footer-nav">
            <ul class="list-none">
                <p class="font-bold">Resources</p>
                <li>
                    <a
                        href="/blog/4-touch-patterns-for-new-account-based-sales-development-teams#infographic"
                        class="text-subtext">The Ultimate ABSD Tech Stack</a
                    >
                </li>
            </ul>
        </nav>

        <nav class="footer-nav">
            <ul class="list-none">
                <p class="font-bold">Navigation</p>
                <li><a href="/" class="text-subtext">Home</a></li>
                <li><a href="/about-us" class="text-subtext">About</a></li>
                <li><a href="/blog" class="text-subtext">Blog</a></li>
                <li><a href="/blog" class="text-subtext">Resources</a></li>
                <li><a href="/contact-us" class="text-subtext">Contact</a></li>
            </ul>
        </nav>
    </div>

    <div class="content-lg">
        <div class="w-full border-t border-divider opacity-25 my-6 lg:my-10" />
        <div class="flex flex-col md:flex-row md:justify-between md:align-center">
            <p class="text-subtext mb-4 md:mb-0 text-xs">
                <CopyrightText />
            </p>
            <ul class="list-none">
                <li aria-label="SalesSource LinkedIn Profile">
                    <a href="https://www.linkedin.com/company/salessource-llc/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</footer>

<style lang="postcss">
    @reference "../app.css";
    footer {
        @apply bg-primary text-txt-white;
    }

    .footer-nav {
        @apply mt-6;

        & li {
            @apply mt-2 md:mt-3;
        }
    }
</style>
