<script lang="ts">
    import salesSourceLogo from "$lib/assets/logos/sales-source-logo.png";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import { Menu, X } from "lucide-svelte";
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import NavLink from "$lib/components/header/NavLink.svelte";
    import NavLinkDropdown from "$lib/components/header/NavLinkDropdown.svelte";
    import MobileNavLinkDropdown from "$lib/components/header/MobileNavLinkDropdown.svelte";
    import { setContext, tick } from "svelte";
    import type { HeaderContext } from "../types/context/header";
    import MobileNavLink from "$lib/components/header/MobileNavLink.svelte";

    let isMenuOpen = false;
    let mobileNavEl: HTMLElement | null = null;

    async function toggleMenu(newState?: boolean) {
        isMenuOpen = newState !== undefined ? newState : !isMenuOpen;
        if (isMenuOpen) {
            await tick();
            const firstFocusable = mobileNavEl?.querySelector<HTMLElement>(
                "a, button, [tabindex]"
            );
            firstFocusable?.focus();
        }
    }

    function handleFocusTrap(e: KeyboardEvent) {
        if (e.key === "Escape") {
            toggleMenu(false);
            return;
        }
        if (e.key !== "Tab" || !mobileNavEl) return;
        const focusable = mobileNavEl.querySelectorAll<HTMLElement>(
            "a, button, [tabindex]:not([tabindex='-1'])"
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }

    setContext<HeaderContext>("header", { toggleMenu });
</script>

<a href="#main" class="skip-link">Skip to content</a>
<header>
    <!-- Main Nav -->
    <nav class="desktop-nav content-lg">
        <a href="/">
            <img class="w-36" alt="Sales Source Inc logo" src={salesSourceLogo} />
        </a>

        <!-- Hamburger Menu -->
        <div class="hamburger">
            <button on:click={() => toggleMenu()} aria-expanded={isMenuOpen}>
                <Menu size={24} color="#f9f9f9" />
            </button>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden lg:flex gap-4 lg:ml-10 text-txt-white flex-1">
            <NavLink href="/" text="Home" />
            <NavLink href="/about-us" text="About Us" />
            <NavLinkDropdown menuName="Who We Help">
                <NavLink href="/who-we-help/marketing-teams" text="Marketing Teams" />
                <NavLink href="/who-we-help/sdr-teams" text="SDR Teams" />
                <NavLink href="/who-we-help/ops-teams" text="Ops Teams" />
                <NavLink href="/who-we-help/enablement-teams" text="Enablement Teams" />
                <NavLink href="/who-we-help/investors" text="Investors" />
            </NavLinkDropdown>
            <NavLinkDropdown menuName="How We Help">
                <NavLink href="/how-we-help/services" text="Services" />
                <NavLink href="/how-we-help/audits" text="Audits" />
                <NavLink href="/how-we-help/technology" text="Technology" />
            </NavLinkDropdown>
            <NavLink href="/resources" text="Resources" />
            <NavLink href="/blog" text="Blog" />
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
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="mobile-backdrop"
                aria-hidden="true"
                on:click={() => toggleMenu()}
            />

            <!-- Menu Content -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <nav
                bind:this={mobileNavEl}
                on:keydown={handleFocusTrap}
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
                        <X size={24} />
                    </button>
                </div>

                <!-- Menu Items -->
                <ul class="mobile-menu">
                    <MobileNavLink href="/" text="Home" />
                    <MobileNavLink href="/about-us" text="About Us" />
                    <MobileNavLinkDropdown menuName="Who We Help">
                        <MobileNavLink href="/who-we-help/marketing-teams" text="Marketing Teams" />
                        <MobileNavLink href="/who-we-help/sdr-teams" text="SDR Teams" />
                        <MobileNavLink href="/who-we-help/ops-teams" text="Ops Teams" />
                        <MobileNavLink
                            href="/who-we-help/enablement-teams"
                            text="Enablement Teams"
                        />
                        <MobileNavLink href="/who-we-help/investors" text="Investors" />
                    </MobileNavLinkDropdown>
                    <MobileNavLinkDropdown menuName="How We Help">
                        <MobileNavLink isSubLink href="/how-we-help/services" text="Services" />
                        <MobileNavLink isSubLink href="/how-we-help/audits" text="Audits" />
                        <MobileNavLink isSubLink href="/how-we-help/technology" text="Technology" />
                    </MobileNavLinkDropdown>
                    <MobileNavLink href="/resources" text="Resources" />
                    <MobileNavLink href="/blog" text="Blog" />
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
    .skip-link {
        @apply absolute -top-10 left-4 bg-bg-primary text-primary px-4 py-2 z-[100] rounded-md font-semibold;
        transition: top 0.2s;
    }
    .skip-link:focus {
        @apply top-2;
    }
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
