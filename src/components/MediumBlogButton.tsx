import medium from "../assets/medium.svg";

export function MediumBlogButton() {
    return (
        <a
            href="https://medium.com/@spounka"
            className={`flex gap-2 ml-auto align-middle text-center font-poppins-sans font-semibold text-[8px] sm:text-[10px]
                        border-[1px] sm:border-2 border-black rounded-full max-w-full xs:w-auto p-4 pt-2 pb-2`}
        >
            <div className="p-0.5 w-4 h-4 xs:p-1 xs:w-6 xs:h-6 border-[1px] border-black rounded-[4px]">
                <img src={medium} alt="Medium svg logo" className={"w-auto h-auto"} />
            </div>
            <p className={"text-center self-center"}>My Medium Blog</p>
        </a>
    );
}
