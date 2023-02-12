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
        name: "Anas Porfolio",
        link: "https://anasfolio.onrender.com/",
        github: "https://github.com/Spounka/anasfolio/",
    },
];

function App() {
    return (
        <>
            <div className="flex flex-col pl-4 min-h-screen md:mr-0 md:pl-11">
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
        </>
    );
}

export default App;
