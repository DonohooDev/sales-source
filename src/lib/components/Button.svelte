<script lang="ts">
    export let icon = "";
    export let btnType: "primary" | "inverted" | "text" | "outlined" = "primary";
    export let clickHandler: () => void;

    const sharedClasses =
        "block px-6 py-2 text-base text-center border border-solid rounded-md whitespace-nowrap transition-colors duration-300 ease-in-out hover:shadow-sm";
    const invertedClasses =
        "text-secondary bg-bg-primary hover:bg-secondary hover:text-txt-white border-secondary";
    const primaryClasses =
        "text-txt-white bg-secondary hover:bg-bg-primary hover:text-secondary border-secondary";
    const textClasses = "px-3 text-secondary border-secondary bg-transparent hover:bg-disabled";
    const outlinedClasses =
        "text-secondary bg-transparent border-transparent hover:border-disabled hover:bg-disabled";

    let className = "";
    $: {
        switch (btnType) {
            case "primary":
                className = `${sharedClasses} ${primaryClasses}`;
                break;
            case "inverted":
                className = `${sharedClasses} ${invertedClasses}`;
                break;
            case "text":
                className = `${sharedClasses} ${textClasses}`;
                break;
            case "outlined":
                className = `${sharedClasses} ${outlinedClasses}`;
                break;

            default:
                break;
        }
    }
</script>

<button class={className} on:click={clickHandler}>
    {#if icon}
        <span class="mr-4">
            <i class={icon} />
        </span>
    {/if}

    <slot />
</button>
