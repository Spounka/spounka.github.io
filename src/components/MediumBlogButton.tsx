import medium from "../assets/medium.svg";

export function MediumBlogButton() {
    return (
        <a
            href="https://medium.com/@spounka"
            className={
                "flex align-middle text-center gap-2 ml-auto font-poppins-sans font-semibold text-[10px] border-2 border-black rounded-full w-auto p-4 pt-2 pb-2"
            }
        >
            <div className="p-1 w-6 h-6 border-[1px] border-black rounded-[4px]">
                <img src={medium} alt="Medium svg logo" className={"w-auto h-auto"} />
            </div>
            <p className={"self-center"}>My Medium Blog</p>
        </a>
    );
}
