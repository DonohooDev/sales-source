import type { SolutionCard } from "../../../types/solution-card";
import type { FAQ } from "../../../types/faq";
import type { Challenge } from "../../../types/challenge";

export const enablementChallenges: Challenge[] = [
    {
        icon: "fa-sharp fa-light fa-chess",
        title: "Lack of Strategy",
        subtitle:
            "Lack of strategy makes you a victim of constant and ever-changing requests that drive a lot of activity with little impact to show for it.",
    },
    {
        icon: "fa-sharp fa-light fa-gear-complex-code",
        title: "Standardization Collapse",
        subtitle:
            "Individuals and teams operating in silos make it nearly impossible to create meaningful processes and programs that can scale.",
    },
    {
        icon: "fa-sharp fa-light fa-calendar-users",
        title: "Lack of Training",
        subtitle:
            "Efforts to upskill sales reps fall flat because they aren't grounded in data-driven best practices and science-based learning principles.",
    },
    {
        icon: "fa-sharp fa-light fa-toolbox",
        title: "Content & Tooling",
        subtitle:
            "Reps don't have the content or tools they need to engage prospects effectively, leading to low response rates and missed opportunities.",
    },
    {
        icon: "fa-sharp fa-light fa-door-open",
        title: "Onboarding Silos",
        subtitle:
            "New hires are left to fend for themselves, leading to high turnover and low productivity.",
    },
    {
        icon: "fa-sharp fa-light fa-screen-users",
        title: "Coaching Woes",
        subtitle:
            "Managers don't have the tools or training they need to coach their teams effectively, leading to inconsistent performance.",
    },
];

export const enablementSolutions: SolutionCard[] = [
    {
        icon: "fa-regular fa-tower-observation",
        title: "Assess",
        subtitle: "Detailed audits across your Enablement strategy, programs, content, and tools.",
        bullets: [
            "Strategy and programs audit",
            "Instructional design and learning science breakdown",
            "Identify and validate internal and external best practices",
            "Onboarding and coaching analysis",
        ],
    },
    {
        icon: "fa-regular fa-bell-concierge",
        title: "Services",
        subtitle:
            "Customized services to help you optimize and gain traction within your team moving forward.",
        bullets: [
            "Strategy and program design",
            "Content and tooling development",
            "Onboarding and coaching programs",
            "Training and enablement programs",
        ],
    },
    {
        icon: "fa-regular fa-laptop-mobile",
        title: "Technology",
        subtitle:
            "Enablement platform evaluation, implementation, configuration, and optimization.",
        bullets: [
            "Content management and delivery",
            "CMS and LMS evaluation and implementation",
            "Coaching and feedback tools setup and support",
            "Integrated dashboards and reporting",
        ],
    },
];

export const enablementFAQ: FAQ[] = [
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
        question:
            "We aren't big enough to have a formal Enablement function - can you help someone in a different full-time role with Enablement responsibilities?",
        answer: "Yes! We take a real-world approach and understand not every org has grown into a formal Enablement function. We'll help you get the most out of the resources you have.",
    },
];
