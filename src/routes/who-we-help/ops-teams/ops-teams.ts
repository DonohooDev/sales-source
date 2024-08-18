import type { SolutionCard } from "../../../types/solution-card";
import type { FAQ } from "../../../types/faq";
import type { Challenge } from "../../../types/challenge";

export const opsChallenges: Challenge[] = [
    {
        icon: "fa-sharp fa-light fa-arrow-progress",
        title: "Inefficient Processes",
        subtitle:
            "Poorly defined processes that have been cobbled together over years of constantly changing stakeholder requirements rarely create efficiencies for the teams you support.",
    },
    {
        icon: "fa-sharp fa-light fa-layer-minus",
        title: "The Wrong Tech Stack",
        subtitle:
            "Sophisticated tech stacks that haven't been optimized to drive synergies across your business often create more operational friction than efficiency.",
    },
    {
        icon: "fa-sharp fa-light fa-hand-holding-dollar",
        title: "Compensation & Incentives",
        subtitle:
            "Sellers struggle to find proper motivation when Comp Plans aren't designed fairly and to incentivize the desired behavior amongst your team.",
    },
    {
        icon: "fa-sharp fa-light fa-sign-hanging",
        title: "Territory Design",
        subtitle:
            "Nothing will stall your Revenue Teams like having unbalanced territory plans. Sales teams must be able to operate with a level playing field.",
    },
    {
        icon: "fa-sharp fa-light fa-screwdriver-wrench",
        title: "Change Management",
        subtitle:
            "Adapting to new processes and systems can be challenging, especially without a structured approach to change management, leading to resistance and inefficiencies.",
    },
    {
        icon: "fa-sharp fa-light fa-chart-pie",
        title: "Data Integration",
        subtitle:
            "Disparate data sources that are not well-integrated can result in fragmented insights and decision-making, hindering operational effectiveness.",
    },
];

export const opsSolutions: SolutionCard[] = [
    {
        icon: "fa-regular fa-tower-observation",
        title: "Assess",
        subtitle:
            "We'll identify gaps and opportunities for improvement and develop a roadmap to streamline your operations and team.",
        bullets: [
            "Tech stack evaluation",
            "Sales process breakdown",
            "Compensation plan review",
            "Territory design analysis",
        ],
    },
    {
        icon: "fa-regular fa-bell-concierge",
        title: "Services",
        subtitle:
            "Systems are rarely optimized to help your SDR Org operate with maximum efficiency, leading to inefficient and frustrated team members.",
        bullets: [
            "Process creation and optimization",
            "Tech stack implementation",
            "Detailed compensation plan",
            "Territory design walkthrough",
        ],
    },
    {
        icon: "fa-regular fa-laptop-mobile",
        title: "Technology",
        subtitle:
            "We'll help you select and implement the right technology to drive operational efficiency and team success.",
        bullets: [
            "Admin on-demand",
            "Industry-leading tech stack recommendations",
            "Data integration and management",
            "Dashboard and reporting setup",
        ],
    },
];

export const opsFAQ: FAQ[] = [
    {
        question: "What team sizes are you willing to work with?",
        answer: "We work with teams of all sizes and stages of maturity.",
    },
    {
        question: "What is the cost of working with SalesSource?",
        answer: "Our pricing is based on the services you need and the size of your team. The audit has a flat fee, future services are scoped and billed separately.",
    },
    {
        question: "How long does an audit take?",
        answer: "The audit process typically takes 4-6 weeks, depending on the size of your team and the complexity of your operations.",
    },
];
