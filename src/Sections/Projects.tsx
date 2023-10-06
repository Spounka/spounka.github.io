import bottom_right_corner from "../assets/br-corner.svg";
import top_left_corner from "../assets/tl-corner.svg";
import Project from "../components/Project";
import { ProjectType } from "../ProjectType";

interface props {
    projects: ProjectType[];
}

function Projects({ projects }: props) {
    return (
        <section className="pl-4 mb-4">
            <h1 className={"font-poppins-sans text-3xl font-medium mb-4"}>Projects</h1>
            <div className="relative mr-5 pt-7 pl-5 pb-12">
                <img
                    src={top_left_corner}
                    alt="gradient top left corner"
                    className={"-z-10 absolute top-0 left-0 p-0 m-0"}
                />

                <div className={"flex flex-col align-top content-start"}>
                    {projects.map((project) => {
                        return (
                            <Project key={project.id} name={project.name} link={project.link} github={project.github} />
                        );
                    })}
                </div>

                <img
                    src={bottom_right_corner}
                    alt="gradient bottom right corner"
                    className="absolute bottom-0 right-0"
                />
            </div>
        </section>
    );
}

export default Projects;
