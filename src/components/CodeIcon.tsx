import code_icon from "../assets/code2.svg";

function CodeIcon() {
    return (
        <div
            className={`mt-1 bg-white flex align-top p-[2px] h-6 w-6 lg:h-8 lg:w-8 rounded-lg `}
        >
            <img
                src={code_icon}
                alt="code symbol"
                className={
                    "bg-white rounded-md text-black min-w-[20px] min-h-[20px] lg:min-w-[32px] lg:min-h-[32px]"
                }
            />
        </div>
    );
}

export default CodeIcon;
