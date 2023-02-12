import hierarchy from "../assets/hierarchy-square-3.svg";
import logo from "../assets/logo.svg";
import email from "../assets/sms.svg";
import { MediumBlogButton } from "../components/MediumBlogButton";

function TopNavBar() {
    return (
        <nav className={"gap-2 md:pr-5 pt-4 hidden md:grid grid-cols-2 grid-rows-1"}>
            <div className={"flex justify-start gap-11"}>
                <img src={logo} alt="my personal logo" className="h-9 w-auto" />
                <div className="flex gap-1">
                    <img
                        src={email}
                        alt="email svg logo"
                        className="h-6 w-6 mt-auto mb-auto"
                    />
                    <p className="font-poppins-sans font-semibold self-center text-xs">
                        boudaakkar.nazih@gmail.com
                    </p>
                </div>
            </div>
            <div className="flex justify-self-end gap-6 ">
                <div
                    className={`font-poppins-sans font-semibold text-xs text-main-dark text-center
                                pl-3 pt-3 pb-3 flex gap-3 w-auto bg-[#EEF0F2] min-w-[100px]
                                rounded-full shadow-[inset_0_3px_6px_rgba(1,20,64,0.2)]`}
                >
                    <img src={hierarchy} alt="" />
                    <p className="self-center">Work</p>
                </div>
                <MediumBlogButton />
            </div>
        </nav>
    );
}

export default TopNavBar;
