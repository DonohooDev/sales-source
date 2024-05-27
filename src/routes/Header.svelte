<script lang="ts">
    import salesSourceLogo from "$lib/assets/logos/sale-source-logo.png";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };
</script>

<header class="bg-primary">
    <!-- Main Nav -->
    <nav
        class="relative px-4 py-4 flex justify-between lg:justify-start items-center bg-white content-xl"
    >
        <a href="/">
            <img class="w-36" alt="Sales Source Inc logo" src={salesSourceLogo} />
        </a>

        <!-- Hamburger Menu -->
        <div class="lg:hidden">
            <button
                class="flex items-center text-txt-white p-2 hover:text-txt-hover rounded-md"
                on:click={toggleMenu}
            >
                <i class="fa-solid fa-bars fa-xl" />
            </button>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden lg:flex gap-10 lg:ml-10 text-txt-white flex-1">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>

        <!-- Contact Us -->
        <span class="hidden lg:block">
            <ButtonLink href="/contact-us" btnText="Contact Us" />
        </span>
    </nav>

    {#if isMenuOpen}
        <!-- Mobile Menu -->
        <div class="relative z-50">
            <!-- Backdrop -->
            <div
                class="fixed inset-0 bg-gray-700 opacity-50"
                aria-hidden
                aria-label="close mobile menu"
                on:click={toggleMenu}
            />

            <!-- Menu Content -->
            <nav
                transition:slide={{ duration: 300, delay: 100, easing: quintOut, axis: "x" }}
                class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-primary overflow-y-auto"
            >
                <div class="flex items-center mb-8">
                    <a class="mr-auto" href="/">
                        <img class="w-36" alt="Sales Source Inc logo" src={salesSourceLogo} />
                    </a>

                    <button
                        class="text-txt-white hover:text-txt-hover"
                        aria-label="close mobile menu"
                        on:click={toggleMenu}
                    >
                        <i class="fa-solid fa-xmark fa-xl" />
                    </button>
                </div>

                <!-- Menu Items -->
                <ul class="flex flex-col gap-1 md:gap-2">
                    <li>
                        <a
                            class="block p-4 text-txt-white hover:bg-bg-primary hover:text-secondary rounded"
                            href="/">Home</a
                        >
                    </li>
                    <li>
                        <a
                            class="block p-4 text-txt-white hover:bg-bg-primary hover:text-secondary rounded"
                            href="/about-us">About Us</a
                        >
                    </li>
                    <li>
                        <a
                            class="block p-4 text-txt-white hover:bg-bg-primary hover:text-secondary rounded"
                            href="/blog">Blog</a
                        >
                    </li>
                </ul>

                <!-- Contact Us -->
                <div class="mt-auto">
                    <div class="mt-6 mb-2">
                        <ButtonLink href="/contact-us" btnText="Contact Us" />
                    </div>

                    <p class="my-4 text-xs text-center text-slate-400">
                        <span>© Sales Source Inc. {new Date().getFullYear()}</span>
                    </p>
                </div>
            </nav>
        </div>
    {/if}
</header>

<style lang="postcss" scoped>
</style>
