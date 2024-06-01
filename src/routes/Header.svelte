<script lang="ts">
    import salesSourceLogo from "$lib/assets/logos/sales-source-logo.png";
    import ButtonLink from "$lib/components/shared/ButtonLink.svelte";
    import DefaultIcon from "$lib/components/shared/DefaultIcon.svelte";
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import NavLink from "$lib/components/header/NavLink.svelte";
    import NavLinkDropdown from "$lib/components/header/NavLinkDropdown.svelte";
    import MobileNavLinkDropdown from "$lib/components/header/MobileNavLinkDropdown.svelte";
    import { setContext } from "svelte";
    import type { HeaderContext } from "../types/context/header";
    import MobileNavLink from "$lib/components/header/MobileNavLink.svelte";

    let isMenuOpen = false;

    function toggleMenu(newState?: boolean) {
        isMenuOpen = newState !== undefined ? newState : !isMenuOpen;
    }

    setContext<HeaderContext>("header", { toggleMenu });
</script>

<header>
    <!-- Main Nav -->
    <nav class="desktop-nav content-lg">
        <a href="/">
            <img class="w-36" alt="Sales Source Inc logo" src={salesSourceLogo} />
        </a>

        <!-- Hamburger Menu -->
        <div class="hamburger">
            <button on:click={() => toggleMenu()}>
                <DefaultIcon white classNames="fa-solid fa-bars fa-xl" />
            </button>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden lg:flex gap-4 lg:ml-10 text-txt-white flex-1">
            <NavLink href="/" text="Home" />
            <NavLink href="/about-us" text="About Us" />
            <NavLinkDropdown menuName="Who We Help">
                <!-- <NavLink href="/blog" text="Marketing Teams" />
                <NavLink href="/blog" text="SDR Teams" />
                <NavLink href="/blog" text="Ops Teams" />
                <NavLink href="/blog" text="Enablement Teams" />
                <NavLink href="/blog" text="Investors" /> -->
            </NavLinkDropdown>
            <NavLinkDropdown menuName="How We Help">
                <!-- <NavLink href="/how-we-help/technology" text="Audits" />
                <NavLink href="/how-we-help/technology" text="Services" /> -->
                <NavLink href="/howWeHelp" text="Technology" />
            </NavLinkDropdown>
            <NavLink href="/blog" text="Blog" />
            <NavLink href="/blog" text="Resources" />
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
                on:click={() => toggleMenu()}
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
                        on:click={() => toggleMenu()}
                    >
                        <i class="fa-solid fa-xmark fa-xl" />
                    </button>
                </div>

                <!-- Menu Items -->
                <ul class="mobile-menu">
                    <MobileNavLink href="/" text="Home" />
                    <MobileNavLink href="/about-us" text="About Us" />
                    <MobileNavLinkDropdown menuName="Who We Help">
                        <!-- <MobileNavLink isSubLink href="/" text="Marketing Teams" />
                        <MobileNavLink isSubLink href="/" text="SDR Teams" />
                        <MobileNavLink isSubLink href="/" text="Ops Teams" />
                        <MobileNavLink isSubLink href="/" text="Enablement Teams" />
                        <MobileNavLink isSubLink href="/" text="Investors" /> -->
                    </MobileNavLinkDropdown>
                    <MobileNavLinkDropdown menuName="How We Help">
                        <!-- <MobileNavLink isSubLink href="/how-we-help/technology" text="Audits" />
                        <MobileNavLink isSubLink href="/how-we-help/technology" text="Services" /> -->
                        <MobileNavLink isSubLink href="/" text="Technology" />
                    </MobileNavLinkDropdown>
                    <MobileNavLink href="/blog" text="Blog" />
                    <MobileNavLink href="/" text="Resources" />
                </ul>

                <!-- Contact Us -->
                <div class="mt-auto">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="mt-6 mb-2" on:click={() => toggleMenu(false)}>
                        <ButtonLink href="/contact-us" btnText="Contact Us" />
                    </div>
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
</style>
