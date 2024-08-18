import type { SolutionCard } from "../../../types/solution-card";
import type { FAQ } from "../../../types/faq";

export const servicesSolutions: SolutionCard[] = [
    {
        icon: "fa-regular fa-rocket-launch",
        title: "Launch",
        subtitle: "Foundations for starting new GTM motions and building strong pipelines.",
        bullets: [
            "Strategic planning",
            "Team training",
            "Tech stack setup",
            "Market entry strategy",
            "Initial performance metrics",
        ],
    },
    {
        icon: "fa-regular fa-hand-holding-seedling",
        title: "Grow",
        subtitle: "Enhancing and growing young, developing teams and processes.",
        bullets: [
            "Advanced training programs",
            "Performance optimization",
            "Process refinement",
            "Technology upgrades",
            "Growth analytics",
        ],
    },
    {
        icon: "fa-regular fa-person-chalkboard",
        title: "Lead",
        subtitle: "Optimizing large, established teams for peak performance.",
        bullets: [
            "Leadership training",
            "KPI development",
            "Long-term strategic planning",
            "Advanced analytics",
            "Continuous improvement programs",
        ],
    },
];

export const servicesFAQ: FAQ[] = [
    {
        question: "Do you offer hourly consulting?",
        answer: "We offer ad hoc consulting to our clients after the audit, and as part of the services packages related to the size and needs of your organization. We do not contract for hourly work immediately without strategic advisement or an audit focus as part of our partnership, which helps us build a path to long-term GTM transformation with your team.",
    },
    {
        question: "What is the cost of working with SalesSource?",
        answer: "The audit has a flat fee, future services are scoped and billed separately based on the size of your organization and the package that you are needing for growing your pipeline creation motion.",
    },
    {
        question: "How long does an audit take?",
        answer: "The audit process typically takes 4-6 weeks depending on the size of your organization and the complexity of your GTM motion.",
    },
    {
        question: "How does the audit connect to the services offered?",
        answer: "Comprehensive review of your GTM strategy, tech stack, and processes allow our team to help your team identify the core projects and needed initiatives to grow. We build a comprehensive plan and a detailed overview of the services options you will need based on our industry best practices. It is in the audit that we identify this scope of work more holistically.",
    },
];

export const servicesChallenges = [
    {
        icon: "fa-solid fa-people-arrows",
        title: "Inbound Conversions",
        subtitle:
            "Overcome low inbound conversions with our comprehensive pipeline services designed to boost qualified lead generation.",
    },
    {
        icon: "fa-solid fa-arrow-up-right-dots",
        title: "Conversion Rates",
        subtitle:
            "Combat decreasing conversion rates with our tailored pipeline services designed to enhance outbound sales effectiveness.",
    },
    {
        icon: "fa-solid fa-business-time",
        title: "Inefficient Processes",
        subtitle:
            "Optimize your spending and streamline operations with our comprehensive pipeline services designed for maximum efficiency.",
    },
    {
        icon: "fa-solid fa-database",
        title: "Tech Stack Optimization",
        subtitle:
            "Resolve operational challenges and enhance efficiency with our specialized services for optimizing your technology stack.",
    },
    {
        icon: "fa-solid fa-chalkboard-user",
        title: "Coaching and Compensation",
        subtitle:
            "Improve motivation and performance with our expert coaching and compensation strategies designed to drive the right behaviors.",
    },
    {
        icon: "fa-solid fa-repeat",
        title: "Process Consistency",
        subtitle:
            "Standardize and streamline your sales process to ensure consistent and reliable results across your entire team and the organization as a whole.",
    },
];
