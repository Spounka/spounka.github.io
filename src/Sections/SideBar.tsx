import SocialMediaIcons from "../components/SocialMediaIcons";

function SideBar() {
    return (
        <div
            className={`hidden min-h-[300px] translate-y-1/4 h-full pt-auto md:flex md:flex-col md:justify-center md:gap-1 border-r-2
                        min-w-[40px] pr-4 mr-12 place-self-center`}
        >
            <SocialMediaIcons height={10} />
        </div>
    );
}

export default SideBar;
