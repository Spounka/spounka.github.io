import { v4 as uuidv4 } from "uuid";
import { ProjectType } from "./ProjectType";

export const projects: ProjectType[] = [
    {
        id: uuidv4(),
        name: "ClickR Photography",
        link: "https://clickr-sr6x.onrender.com/",
        github: "https://github.com/Spounka/clickr-landing-page/",
    },
    {
        id: uuidv4(),
        name: "Zak Portfolio",
        link: "https://zakfolio.onrender.com/",
        github: "https://github.com/Spounka/zakfolio/",
    },
    {
        id: uuidv4(),
        name: "SE-Logger",
        link: null,
        github: "https://github.com/Spounka/Logger",
    },
    {
        id: uuidv4(),
        name: "GLSL Include Parser",
        link: null,
        github: "https://github.com/Spounka/glsl-include-parser",
    },
    {
        id: uuidv4(),
        name: "LD 48H Game Competion",
        link: "https://spounka.itch.io/pain-survival",
        github: "https://github.com/Spounka/ldjam-50",
    },
];
