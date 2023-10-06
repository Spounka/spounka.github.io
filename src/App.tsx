import CatchyLineText from "./components/CatchyLineText";
import ProfileHeader from "./components/ProfileHeader";
import TextWithLineUnder from "./components/TextWithLineUnder";
import { projects } from "./projects";
import Footer from "./Sections/Footer";
import Introduction from "./Sections/Introduction";
import Projects from "./Sections/Projects";
import SideBar from "./Sections/SideBar";
import TopNavBar from "./Sections/TopNavBar";

function App() {
  return (
    <div
      className={`absolute -z-30 flex flex-col pl-4 justify-center align-middle
                       md:p-8 md:pb-0 md:pt-6 xl:p-80 xl:pt-6 xl:pb-0 md:bg-[#EEF0F2]`}>
      <div
        className={`-z-20 flex flex-col pl-0 min-h-screen md:mr-0 md:pl-11 md:pb-9
                            rounded-3xl rounded-b-none shadow-[0_38px_20px_rgba(0, 0, 0, 0.16)] pr-2 lg:pr-10 bg-white`}>
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
            <CatchyLineText text={"Demystifies problems "} />
            <CatchyLineText text={"With crystal clear solutions"} />
          </TextWithLineUnder>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
