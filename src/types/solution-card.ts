import type { ComponentType } from "svelte";

export type SolutionCard = {
    icon: ComponentType;
    title: string;
    subtitle: string;
    bullets: string[];
};
