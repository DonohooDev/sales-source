<script lang="ts">
    import logo from "$lib/assets/logos/sales-source-logo.png";
    import CopyrightText from "$lib/components/shared/CopyrightText.svelte";
</script>

<footer>
    <div class="flex flex-col md:flex-row md:gap-12 lg:gap-16 xl:gap-24 content-lg">
        <span class="flex-1">
            <img src={logo} alt="SalesSource logo" class="w-40 mb-3" />
            <p class="text-subtext">
                SalesSource is the premium source of comprehensive go to market strategies and
                implementation.
            </p>
        </span>

        <nav class="footer-nav">
            <ul class="list-none">
                <p class="font-bold">Resources</p>
                <li><a href="/privacy-policy" class="text-subtext">Privacy Policy</a></li>
            </ul>
        </nav>

        <nav class="footer-nav">
            <ul class="list-none">
                <p class="font-bold">Navigation</p>
                <li><a href="/" class="text-subtext">Home</a></li>
                <li><a href="/about-us" class="text-subtext">About</a></li>
                <li><a href="/blog" class="text-subtext">Blog</a></li>
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
                        <i class="fa-brands fa-linkedin fa-xl" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</footer>

<style lang="postcss">
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
