import type { SolutionCard } from "../../../types/solution-card";
import type { FAQ } from "../../../types/faq";
import type { Challenge } from "../../../types/challenge";

export const investorsChallenges: Challenge[] = [
    {
        icon: "fa-sharp fa-light fa-chart-line-up-down",
        title: "Inconclusive Data",
        subtitle:
            "Inadequate data makes it impossible to make sound decisions and to know how and when to pivot your strategy.",
    },
    {
        icon: "fa-sharp fa-light fa-person-circle-question",
        title: "Lacking Process & Technology",
        subtitle:
            "Without the proper processes and tech stack in place, operational friction keeps your teams from working efficiently.",
    },
    {
        icon: "fa-sharp fa-light fa-chart-line-down",
        title: "Underperformance",
        subtitle:
            "The lack of skills and competence across your organization lowers the impact each individual contributor and leader is capable of making.",
    },
    {
        icon: "fa-sharp fa-light fa-people-arrows",
        title: "Market Volatility",
        subtitle:
            "Rapid changes in market conditions can lead to increased risk and uncertainty, making it difficult to protect and grow investments.",
    },
    {
        icon: "fa-sharp fa-light fa-puzzle-piece",
        title: "Integration Issues",
        subtitle:
            "Integrating new acquisitions or technologies can be complex and time-consuming, often resulting in delays and unexpected costs.",
    },
    {
        icon: "fa-sharp fa-light fa-binoculars",
        title: "Identifying Opportunities",
        subtitle:
            "Finding high-potential investment opportunities in a crowded market requires significant time, effort, and expertise.",
    },
];

export const investorsSolutions: SolutionCard[] = [
    {
        icon: "fa-regular fa-tower-observation",
        title: "Assess",
        subtitle: "Detailed audits across your Marketing, Operation, SDR, and Enablement Functions",
        bullets: [
            "Evaluate your current state",
            "Review the tech stack within each organization and across your entire Revenue landscape",
            "Develop a roadmap for improvement and data-driven decision-making",
            "Analyze department-specific and cross-functional processes and workflows",
        ],
    },
    {
        icon: "fa-regular fa-bell-concierge",
        title: "Services",
        subtitle: "GTM Strategy spanning Marketing, Operations, SDRs, and Enablement",
        bullets: [
            "Process and technology optimization that drives efficiency and effectiveness",
            "Data quality and accuracy improvements across your entire Revenue landscape",
            "Training and enablement bootcamps taught by industry experts",
            "Sales and marketing alignment",
        ],
    },
    {
        icon: "fa-regular fa-laptop-mobile",
        title: "Technology & Tools",
        subtitle: "Technology Evaluation, Implementation, Configuration, and Optimization.",
        bullets: [
            "Content management and delivery backed by data-driven insights",
            "Full suite of advisory services for your tech stack",
            "Implementation and support for CRM and marketing automation tools",
            "Data analytics and reporting tools to drive data-driven decision-making",
        ],
    },
];

export const investorsFAQ: FAQ[] = [
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
    {
        question: "How long does it take to implement changes once the audit is complete?",
        answer: "Every client is different. We assess the change management timeline based on several factors including size, complexity, and budget and resources available.",
    },
];
