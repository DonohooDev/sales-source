<script lang="ts">
    export let href: string;
    export let btnText: string;
    export let icon = "";
</script>

<a
    class="block px-6 py-3 text-base text-center text-txt-white bg-secondary
     hover:bg-bg-primary hover:text-secondary border border-secondary
     border-solid rounded-md"
    {href}
>
    {#if icon}
        <span class="mr-4">
            <i class={icon} />
        </span>
    {/if}

    {btnText}
</a>
