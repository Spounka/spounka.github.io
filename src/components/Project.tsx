import { motion, useAnimationControls } from "framer-motion";
import link_svg from "../assets/link.svg";
import github_svg from "../assets/logo--github.svg";
import CodeIcon from "./CodeIcon";

function Project({ name, link, github }: any) {
    const controls = useAnimationControls();

    return (
        <motion.div className={"flex gap-1.5 z-10 cursor-pointer"}>
            <CodeIcon />
            <div
                className={"flex flex-col content-start justify-start text-start gap-5"}
                onMouseEnter={() => {
                    controls.stop();
                    controls.start({
                        opacity: 1,
                        height: "auto",
                    });
                    return controls.stop;
                }}
                onMouseLeave={() => {
                    controls.stop();
                    controls.start({
                        opacity: 0,
                        height: 0,
                    });
                }}
            >
                <h4
                    className={
                        "font-poppins-sans text-left justify-start content-start font-normal text-base md:text-sm lg:text-lg text-[#3E464E]"
                    }
                >
                    {name}
                </h4>
                <motion.div
                    className={
                        "flex content-start justify-start gap-x-5 h-0 -translate-y-1 overflow-hidden"
                    }
                    animate={controls}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {link && (
                        <a
                            className="flex gap-1 align-middle bg-white rounded-md p-1"
                            href={link}
                            target={"_blank"}
                        >
                            <img src={link_svg} alt="link logo" className="h-5" />
                        </a>
                    )}
                    {github && (
                        <a
                            className="flex gap-1 align-middle bg-white rounded-md p-1"
                            href={github}
                            target={"_blank"}
                        >
                            <img src={github_svg} alt="github logo" className="h-5" />
                        </a>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Project;
