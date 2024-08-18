<script lang="ts">
</script>

<section class="content-md">
    <h2 id="audit-expectations" class="text-center">What's an Audit Like?</h2>
    <p class="text-subtitle text-center max-w-[800px] mx-auto">
        Our audits are designed to provide a comprehensive analysis of your current GTM strategy and
        tech stack. Here's a breakdown of our process:
    </p>
    <div class="steps">
        <div class="steps-content">
            <div class="step">
                <span class="step-icon">
                    <i class="fa-sharp fa-user-ninja text-[2rem] md:text-[2.5rem] text-secondary" />
                </span>
                <h3 class="text-h6">Initial Assessment</h3>
                <p class="text-subtext">
                    We review your current GTM strategy, internal processes, and tech stack.
                </p>
            </div>

            <div class="step">
                <span class="step-icon">
                    <i
                        class="fa-sharp fa-chart-mixed text-[2rem] md:text-[2.5rem] text-secondary"
                    />
                </span>
                <h3 class="text-h6">Detailed Analysis</h3>
                <p class="text-subtext">
                    In-depth analysis of your processes and performance metrics.
                </p>
            </div>

            <div class="hidden lg:block lg:h-[175px]" />
            <div class="hidden lg:block lg:h-[175px]" />

            <div class="step">
                <span class="step-icon">
                    <i
                        class="fa-sharp fa-code-compare text-[2rem] md:text-[2.5rem] text-secondary"
                    />
                </span>
                <h3 class="text-h6">Benchmark Comparison</h3>
                <p class="text-subtext">
                    Compare your performance metrics against industry benchmarks.
                </p>
            </div>

            <div class="step">
                <span class="step-icon">
                    <i
                        class="fa-sharp fa-calendar-check text-[2rem] md:text-[2.5rem] text-secondary"
                    />
                </span>
                <h3 class="text-h6">Action Plan</h3>
                <p class="text-subtext">
                    Develop a customized action plan to address identified issues and optimize
                    performance.
                </p>
            </div>
        </div>
    </div>
</section>

<style type="postcss">
    .steps {
        @media screen and (min-width: 1075px) {
            position: relative;
            background-image: url("$lib/assets/step-guide.svg");
            background-size: contain;
            background-repeat: no-repeat;
        }
    }

    .steps-content {
        @apply grid gap-8 lg:gap-0 grid-cols-1 md:grid-cols-2 justify-items-center;
    }

    .step {
        @apply text-center relative flex flex-col items-center mt-4 max-w-[350px];

        &:hover > span {
            @apply bg-secondary;
        }
        &:hover path {
            @apply fill-bg-primary;
        }
        &:nth-child(odd) {
            @apply md:justify-self-start;
        }
        &:nth-child(even) {
            @apply md:justify-self-end md:mr-8;
        }
    }

    .step-icon {
        @apply bg-bg-primary shadow-md rounded-full p-6 mb-2 border-4 border-solid border-secondary transition-bg;
    }
</style>
