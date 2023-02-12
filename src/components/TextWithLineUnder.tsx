import line from "../assets/Straight Line.svg";

function TextWithLineUnder({ children }: any) {
    return (
        <div className="flex flex-col">
            {children}
            <img src={line} alt="straight line svg" className="h-3 max-w-xs" />
        </div>
    );
}

export default TextWithLineUnder;
