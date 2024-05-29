<script lang="ts">
    export let menuName: string;
</script>

<li class="mobile-dropdown">
    <details
        name="mobile-nav-dropdown"
        class="rounded-md bg-primary p-4 hocus:outline hocus:outline-primary hocus:bg-bg-primary text-txt-white hocus:text-primary"
    >
        <summary class="focus:outline-none cursor-pointer flex justify-between items-center">
            <span>{menuName}</span>
            <span class="transition-transform ease">
                <i class="fa-solid fa-chevron-down" />
            </span>
        </summary>

        <ul class="mt-4">
            <slot />
        </ul>
    </details>
</li>

<style lang="postcss">
    .mobile-dropdown {
        &:hover a {
            @apply text-primary;
        }
    }
</style>
