<script lang="ts">
    export let menuName: string;

    import { fade } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import DefaultIcon from "$lib/components/shared/DefaultIcon.svelte";

    let isDropdownOpen = false;

    const toggleDropdown = () => {
        isDropdownOpen = !isDropdownOpen;
    };
</script>

<li class="nav-dropdown" on:focusout={toggleDropdown}>
    <button on:click={toggleDropdown} aria-controls={menuName + "-dropdown"}>
        {menuName}
        <!-- <DefaultIcon white classNames="fa-solid fa-chevron-down fa-sm ml-2" /> -->
        <i class="fa-solid fa-chevron-down fa-sm ml-2" />
    </button>

    {#if isDropdownOpen}
        <ul
            id={menuName + "-dropdown"}
            class="dropdown-menu"
            transition:fade={{ delay: 0, duration: 300 }}
        >
            <slot />
        </ul>
    {/if}
</li>

<style lang="postcss">
    .nav-dropdown {
        @apply relative text-txt-white px-4 py-2 hocus:text-primary hocus:outline hocus:outline-primary hocus:bg-bg-primary rounded-md;

        & button {
            @apply flex items-center;
        }
    }

    .dropdown-menu {
        @apply list-none absolute flex gap-1 flex-col min-w-[200px] top-[60px] left-0 p-2 bg-primary rounded-md z-50 shadow-lg shadow-primary;

        & a {
            @apply w-full whitespace-nowrap pr-14;
        }
    }
</style>
