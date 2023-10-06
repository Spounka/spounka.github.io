/*
 * Copyright (c) 2023. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import CLogo from "./assets/technologies/c.svg?react";
import CppLogo from "./assets/technologies/cpp.svg?react";
import CSharpLogo from "./assets/technologies/csharp.svg?react";
import CSSLogo from "./assets/technologies/css.svg?react";
import DjangoLogo from "./assets/technologies/django.svg?react";
import DockerLogo from "./assets/technologies/docker.svg?react";
import GitLogo from "./assets/technologies/git.svg?react";
import HTMLLogo from "./assets/technologies/html.svg?react";
import JavaScriptLogo from "./assets/technologies/javascript.svg?react";
import LinuxLogo from "./assets/technologies/linux.svg?react";
import NGINXLogo from "./assets/technologies/nginx.svg?react";
import NodeJsLogo from "./assets/technologies/nodejs.svg?react";
import PythonLogo from "./assets/technologies/python.svg?react";
import ReactLogo from "./assets/technologies/react.svg?react";

type SkillType = {
    name: string;
    link: string;
    logo: any;
};

export const skills: SkillType[] = [
    { name: "React", link: "", logo: ReactLogo },
    { name: "JavaScript", link: "", logo: JavaScriptLogo },
    { name: "Django", link: "", logo: DjangoLogo },
    { name: "NodeJs", link: "", logo: NodeJsLogo },
    { name: "Python", link: "", logo: PythonLogo },
    { name: "Docker", link: "", logo: DockerLogo },
    { name: "HTML", link: "", logo: HTMLLogo },
    { name: "CSS", link: "", logo: CSSLogo },
    { name: "Git", link: "", logo: GitLogo },
    { name: "Linux", link: "", logo: LinuxLogo },
    { name: "Nginx", link: "", logo: NGINXLogo },
    { name: "C", link: "", logo: CLogo },
    { name: "C++", link: "", logo: CppLogo },
    { name: "C#", link: "", logo: CSharpLogo },
];
