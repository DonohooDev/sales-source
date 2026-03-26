<script lang="ts">
    import { ChevronDown } from "lucide-svelte";

    export let menuName: string;
</script>

<li class="mobile-dropdown">
    <details
        name="mobile-nav-dropdown"
        class="rounded-md bg-primary p-4 hocus:outline-solid hocus:outline-primary hocus:bg-bg-primary hocus:text-primary"
    >
        <summary
            class="focus:outline-hidden cursor-pointer flex justify-between items-center text-txt-white"
        >
            <span>{menuName}</span>
            <span class="transition-transform ease">
                <ChevronDown size={20} />
            </span>
        </summary>

        <ul class="mt-4">
            <slot />
        </ul>
    </details>
</li>

<style lang="postcss">
    @reference "../../../app.css";
    details:hover summary {
        @apply text-primary;
    }

    details[open] {
        @apply bg-bg-primary;

        & > summary {
            @apply text-primary;
        }

        & > ul li a {
            @apply text-primary;
        }
    }

    .mobile-dropdown {
        &:hover a {
            @apply text-primary;
        }
    }
</style>
