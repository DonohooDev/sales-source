import type { SolutionCard } from "../../../types/solution-card";
import type { FAQ } from "../../../types/faq";
import { ChartLine, UsersRound, Wrench, Database, BatteryLow, SearchCheck, Cloud, Users, Layers } from "lucide-svelte";

export const technologySolutions: SolutionCard[] = [
    {
        icon: ChartLine,
        title: "Advanced Analytics",
        subtitle: "Improve process through data-driven insights and analytics.",
        bullets: [
            "Sales forecasting",
            "Lead scoring",
            "Performance tracking",
            "Customer insights",
            "Market analysis",
        ],
    },
    {
        icon: UsersRound,
        title: "CRM Integration",
        subtitle: "Enhance efficiency with seamless CRM integration and process automation.",
        bullets: [
            "Contact management",
            "Sales process alignment",
            "Data clean-up and strategy",
            "Technology coaching and training",
            "Data synchronization",
        ],
    },
    {
        icon: Wrench,
        title: "Automation Tools",
        subtitle: "Streamline operations with powerful automation tools.",
        bullets: [
            "Workflow and task automation",
            "Email reporting and messaging plans",
            "Lead nurturing and lead routing",
            "Capacity planning with blueprint orchestration",
            "Content committee for messaging optimization",
        ],
    },
];

export const technologyFAQ: FAQ[] = [
    {
        question: "Do you support multiple CRM systems?",
        answer: "Yes and no, we are experts in Salesforce and HubSpot primarily but know the expertise and best practices that can translate to many other systems.",
    },
    {
        question: "How do you ensure data accuracy?",
        answer: "We employ rigorous data validation and cleansing processes through both offshore and onshore teams, proprietary Snowflake backed analytics tools, and partnerships with technology experts and software companies across the industry.",
    },
    {
        question: "Can you automate custom workflows?",
        answer: "Yes, we can automate bespoke workflows tailored to your needs, we typically evaluate the needs and help you identify the solution that is right for you. Then implementation involves creating a process and a plan for the things necessary for those automation's to drive productivity for your team.",
    },
    {
        question: "Do you help with technology enablement?",
        answer: "Our expert implementation team has done over 1,500 implementations of tools like Outreach, Salesforce, Marketo, Hubspot, Gong, ZoomInfo, Lusha, and more.",
    },
];

export const technologyChallenges = [
    {
        icon: Database,
        title: "Data Silos",
        subtitle:
            "Facing challenges with isolated data across various systems, leading to inefficiencies and difficulties in accessing holistic business insights.",
    },
    {
        icon: BatteryLow,
        title: "Inefficient Processes",
        subtitle:
            "Manual tasks are slowing down your sales operations, reducing productivity, and impacting overall business efficiency.",
    },
    {
        icon: SearchCheck,
        title: "Lack of Insights",
        subtitle:
            "Struggling to derive actionable insights from your data, hindering informed decision-making and strategic planning.",
    },
    {
        icon: Cloud,
        title: "Poor Integration",
        subtitle:
            "Facing challenges in effectively integrating various sales tools, resulting in disconnected workflows and reduced efficiency.",
    },
    {
        icon: Users,
        title: "Customer Engagement",
        subtitle:
            "Struggling to maintain consistent and meaningful engagement with customers, affecting retention and satisfaction levels.",
    },
    {
        icon: Layers,
        title: "Scalability Issues",
        subtitle:
            "Facing difficulties in scaling your technology infrastructure to support growing business demands and maintain performance throughout operations.",
    },
];
