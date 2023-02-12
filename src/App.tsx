import { v4 as uuidv4 } from "uuid";
import CatchyLineText from "./components/CatchyLineText";
import ProfileHeader from "./components/ProfileHeader";
import TextWithLineUnder from "./components/TextWithLineUnder";
import { ProjectType } from "./ProjectType";
import Footer from "./Sections/Footer";
import Introduction from "./Sections/Introduction";
import Projects from "./Sections/Projects";
import SideBar from "./Sections/SideBar";
import TopNavBar from "./Sections/TopNavBar";

const projects: ProjectType[] = [
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

function App() {
    return (
        <div
            className={
                "flex justify-center align-middle md:p-24 md:pt-6 md:pb-0 md:bg-[#EEF0F2]"
            }
        >
            <div
                className={`flex flex-col pl-4 min-h-screen md:mr-0 md:pl-11 md:pb-9
                            rounded-3xl rounded-b-none shadow-[0_38px_20px_rgba(0, 0, 0, 0.16)] pr-10 bg-white`}
            >
                <TopNavBar />
                <div className="flex">
                    <SideBar />
                    <div className="flex flex-col">
                        <ProfileHeader />
                        <div className="flex flex-col md:grid md:grid-cols-3">
                            <Introduction />
                            <div className="hidden md:block"></div>
                            <Projects projects={projects} />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:pl-16">
                    <TextWithLineUnder>
                        <CatchyLineText text={"Talk is Cheap,"} />
                        <CatchyLineText text={"Show me the code"} />
                    </TextWithLineUnder>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
