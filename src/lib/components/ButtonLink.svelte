<script lang="ts">
    export let href: string;
    export let size: "sm" | "md" | "lg" = "md";
    export let btnText: string;
    export let icon = "";
    export let btnType: "primary" | "inverted" | "text" | "outlined" = "primary";

    const sharedClasses = `flex justify-around items-center ${size === "lg" ? "px-8 py-3 text-lg" : size === "md" ? "px-6 py-3 text-base" : "px-5 py-2 text-base"} text-center border border-solid rounded-md whitespace-nowrap transition-colors duration-300 ease-in-out hover:shadow-sm`;
    const invertedClasses =
        "text-secondary bg-bg-primary hover:bg-secondary hover:text-txt-white border-secondary";
    const primaryClasses =
        "text-txt-white bg-secondary hover:bg-bg-primary hover:text-secondary border-secondary";
    const outlinedClasses =
        "px-3 text-secondary border-secondary bg-transparent hover:bg-bg-contrast";
    const textClasses =
        "text-secondary bg-transparent border-transparent hover:border-disabled hover:bg-bg-contrast";

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

<a class={className} {href}>
    {#if icon}
        <span class="mr-3 lg:mr-5">
            <i class={icon} />
        </span>
    {/if}

    {btnText}
</a>
