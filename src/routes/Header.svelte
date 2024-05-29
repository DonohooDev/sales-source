<script lang="ts">
    import salesSourceLogo from "$lib/assets/logos/sales-source-logo.png";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import DefaultIcon from "$lib/components/DefaultIcon.svelte";
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import CopyrightText from "$lib/components/CopyrightText.svelte";
    import NavLink from "$lib/components/header/NavLink.svelte";
    import NavLinkDropdown from "$lib/components/header/NavLinkDropdown.svelte";
    import MobileNavLinkDropdown from "$lib/components/header/MobileNavLinkDropdown.svelte";

    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };
</script>

<header>
    <!-- Main Nav -->
    <nav class="desktop-nav content-lg">
        <a href="/">
            <img class="w-36" alt="Sales Source Inc logo" src={salesSourceLogo} />
        </a>

        <!-- Hamburger Menu -->
        <div class="hamburger">
            <button on:click={toggleMenu}>
                <DefaultIcon white classNames="fa-solid fa-bars fa-xl" />
            </button>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden lg:flex gap-4 lg:ml-10 text-txt-white flex-1">
            <NavLink href="/" text="Home" />
            <NavLink href="/about-us" text="About Us" />
            <NavLink href="/blog" text="Blog" />
            <NavLinkDropdown menuName="Services">
                <NavLink href="/blog" text="Blog Intelligence Marker" />
                <NavLink href="/about-us" text="About Us" />
            </NavLinkDropdown>
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
                class="mobile-backdrop"
                aria-hidden
                aria-label="close mobile menu"
                on:click={toggleMenu}
            />

            <!-- Menu Content -->
            <nav
                transition:slide={{ duration: 300, delay: 100, easing: quintOut, axis: "x" }}
                class="mobile-nav"
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
                <ul class="mobile-menu">
                    <NavLink href="/" text="Home" />
                    <NavLink href="/about-us" text="About Us" />
                    <MobileNavLinkDropdown menuName="Services">
                        <li><a href="/" class="mobile-sub-link">Home</a></li>
                        <li><a href="/about-us" class="mobile-sub-link">About Us</a></li>
                        <li><a href="/blog" class="mobile-sub-link">Blog</a></li>
                    </MobileNavLinkDropdown>
                    <MobileNavLinkDropdown menuName="Services">
                        <li><a href="/" class="mobile-sub-link">Home</a></li>
                        <li><a href="/about-us" class="mobile-sub-link">About Us</a></li>
                        <li><a href="/blog" class="mobile-sub-link">Blog</a></li>
                    </MobileNavLinkDropdown>
                    <NavLink href="/blog" text="Blog" />
                </ul>

                <!-- Contact Us -->
                <div class="mt-auto">
                    <div class="mt-6 mb-2">
                        <ButtonLink href="/contact-us" btnText="Contact Us" />
                    </div>

                    <!-- <p class="my-4 text-center text-slate-400">
                        <CopyrightText />
                    </p> -->
                </div>
            </nav>
        </div>
    {/if}
</header>

<style lang="postcss">
    header {
        @apply bg-primary;
    }
    .desktop-nav {
        @apply relative px-4 py-4 flex justify-between lg:justify-start items-center;
    }
    .hamburger {
        @apply lg:hidden;

        & > button {
            @apply flex items-center text-txt-white p-2 hover:text-txt-hover rounded-md;
        }
    }
    .mobile-backdrop {
        @apply fixed inset-0 bg-gray-700 opacity-50;
    }
    .mobile-nav {
        @apply fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-primary overflow-y-auto;
    }
    .mobile-menu {
        @apply list-none flex flex-col gap-1 md:gap-2;

        & a {
            @apply block py-3;
        }
    }
    .mobile-sub-link {
        @apply inline-block text-txt-white px-4 py-2 hocus:outline hocus:outline-primary rounded-md;
    }
</style>
