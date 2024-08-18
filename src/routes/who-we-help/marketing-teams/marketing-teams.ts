import type { SolutionCard } from "../../../types/solution-card";
import type { FAQ } from "../../../types/faq";

export const marketingChallenges = [
    {
        icon: "fa-sharp fa-light fa-message-dots",
        title: "Bad Persona and Messaging Alignment",
        subtitle:
            "The buyer landscape is changing, and with it, the Ideal Customer Profile and Buyer Personas making it harder than ever to resonate with potential buyers.",
    },
    {
        icon: "fa-sharp fa-light fa-user-plus",
        title: "Lead Scoring and Routing",
        subtitle:
            "Getting leads is one thing. Getting and identifying quality leads and getting them to the right person...that's a different story altogether.",
    },
    {
        icon: "fa-sharp fa-light fa-inbox-full",
        title: "Compliance and Outbound Thresholds",
        subtitle:
            "With new industry regulations, how can you protect your business from falling prey to more intense Spamming requirements while still getting your message out there?",
    },
    {
        icon: "fa-sharp fa-light fa-chess",
        title: "Competing Data Sources",
        subtitle:
            "Competing Data Sources and incompatible technologies can make your marketing data and processes a knotted ball of yarn that's impossible to make sense of.",
    },
    {
        icon: "fa-sharp fa-light fa-chart-line",
        title: "Market Segmentation and Targeting",
        subtitle:
            "Identifying and effectively reaching the right market segments is critical yet challenging in a saturated and diverse marketplace.",
    },
    {
        icon: "fa-sharp fa-light fa-bullhorn",
        title: "Attribution and ROI",
        subtitle:
            "Measuring the true impact and ROI of marketing campaigns can be difficult, making it hard to refine strategies and allocate budgets effectively.",
    },
];

export const marketingSolutions: SolutionCard[] = [
    {
        icon: "fa-regular fa-tower-observation",
        title: "Assess",
        subtitle:
            "Detailed audits across your ICP and Messaging approach, Marketing tech stack, lead scoring and routing, and outreach strategy.",
        bullets: [
            "Tech stack evaluation",
            "ICP and Buyer Persona audit",
            "Lead scoring and routing audit",
            "Outreach strategy audit",
        ],
    },
    {
        icon: "fa-regular fa-bell-concierge",
        title: "Services",
        subtitle:
            "Strategic advisory and consulting services to help you optimize your marketing strategy and tech stack for better results.",
        bullets: [
            "ICP identification and Persona creation",
            "Lead scoring and routing strategy",
            "Outreach strategy development",
            "Tech stack evaluation and recommendations",
        ],
    },
    {
        icon: "fa-regular fa-laptop-mobile",
        title: "Technology",
        subtitle:
            "Implementation and integration services that help get from strategy to execution, and ensure your tech stack is optimized for your needs.",
        bullets: [
            "Admin on-demand",
            "Industry-leading tech stack recommendations",
            "Data integration and management",
            "Dashboard and reporting setup",
        ],
    },
];

export const marketingFAQ: FAQ[] = [
    {
        question: "What team sizes are you willing to work with?",
        answer: "We work with teams of all sizes and stages of maturity.",
    },
    {
        question: "What are the primary technologies you support?",
        answer: "We work heavily with HubSpot, Marketo, Salesforce, LeanData, and Snowflake, along with a myriad of other Marketing Operations tools for enrichment, conversion, routing, and scoring.",
    },
    {
        question: "How long does an audit take?",
        answer: "The audit process typically takes 4-6 weeks, depending on the size of your team and the complexity of your marketing operations.",
    },
    {
        question:
            "Do you assist with Sales Engagement tools like Outreach, Groove, Salesloft, etc.?",
        answer: "Yes, as part of our comprehensive audit of technology and our technology services, we have expertise in a variety of Sales Engagement platforms.",
    },
];
