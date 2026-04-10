import weatherDemo from "$lib/assets/weatherApp_Demo.mp4"
import suiteDemo from "$lib/assets/Mock_Demo_CoralStudio.mp4"
import characterDemo from "$lib/assets/characterBuilder_Demo.mp4"

type Project = {
    title: string;
    description: string;
    problem: string;
    solution: string;
    tech: string;
    demo: string;
};

const cases: Record<string, Project> = {
    "weather-app": {
        title: "Weather App",
        description: "A weather dashboard using a public weather API.",
        problem: "Users needed a quick way to view city weather.",
        solution: "Built a responsive UI that fetches real-time weather.",
        tech: "JavaScript, Weather API",
        demo: weatherDemo
    },
    "creative-suite": {
        title: "Creative Suite Landing",
        description: "Landing page concept for a creative SaaS platform.",
        problem: "Need a landing page with a focus on design to find new customers.",
        solution: "Designed a clean CTA-focused landing page.",
        tech: "Svelte, Tailwind",
        demo: suiteDemo
    },
    "character-builder": {
        title: "Character Builder",
        description: "A character builder for tabletop RPG players.",
        problem: "Manual character sheets were tedious.",
        solution: "Interactive builder with saved characters.",
        tech: "React, Firebase",
        demo: characterDemo
    }
};

export function load({ params }) {
    const project = cases[params.slug];

    return {
        project
    };
}