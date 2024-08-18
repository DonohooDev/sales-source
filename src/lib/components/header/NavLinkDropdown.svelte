<script lang="ts">
    export let menuName: string;

    import { fade } from "svelte/transition";

    let isDropdownOpen = false;

    const toggleDropdown = () => {
        setTimeout(() => {
            isDropdownOpen = false;
            // document.removeEventListener("click", eventListener);
        }, 200);
    };
</script>

<li class="nav-dropdown" class:open={isDropdownOpen}>
    <button
        on:click={(e) => {
            // @ts-ignore
            e.target.focus();
            isDropdownOpen = !isDropdownOpen;
        }}
        aria-controls={menuName + "-dropdown"}
        on:focusout={toggleDropdown}
    >
        {menuName}
        <i class="fa-solid fa-chevron-down fa-sm ml-2" />
    </button>

    {#if isDropdownOpen}
        <ul
            id={menuName + "-dropdown"}
            class="dropdown-menu"
            transition:fade={{ delay: 0, duration: 200 }}
        >
            <slot />
        </ul>
    {/if}
</li>

<style lang="postcss">
    .nav-dropdown {
        @apply relative;

        &::after {
            @apply absolute top-[90%] left-0 right-0 -bottom-[25%] bg-transparent transition-bg ease-linear duration-150;
            content: "";
        }

        &.open {
            &::after {
                @apply bg-primary;
                content: "";
            }

            & > button {
                @apply bg-primary outline-none text-txt-white hover:bg-primary hover:text-txt-white hover:outline-none;
            }
        }

        & > button {
            @apply flex items-center px-4 py-2 text-txt-white hover:text-primary hover:outline hover:outline-primary hover:bg-bg-soft transition-bg ease-linear duration-200 rounded-md;
        }

        &:hover a {
            @apply text-txt-white;
        }
    }

    .dropdown-menu {
        @apply list-none absolute flex gap-1 flex-col min-w-[200px] top-[115%] left-0 p-2 bg-primary rounded-md z-50;

        & a {
            @apply w-full whitespace-nowrap pr-14 text-txt-white;

            &:hover {
                @apply text-primary;
            }
        }
    }
</style>
