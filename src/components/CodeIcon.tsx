import code_icon from "../assets/code2.svg";

function CodeIcon() {
    return (
        <div
            className={`mt-1 bg-white flex self-start justify-center align-middle p-[2px] h-6 w-6 rounded-lg
                       hover:bg-gradient-to-br hover:from-main-dark hover:to-main-blue hover:bg-opacity-100
                       transition-all ease-in-out duration-500 hover:cursor-pointer`}
        >
            <img
                src={code_icon}
                alt="code symbol"
                className={"bg-white rounded-md text-black"}
            />
        </div>
    );
}

export default CodeIcon;
