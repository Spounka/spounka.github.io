import LineSvg from "../assets/Straight Line.svg?react";

function TextWithLineUnder({ children }: any) {
    return (
        <div className="flex flex-col justify-start items-start">
            {children}
            <LineSvg />
        </div>
    );
}

export default TextWithLineUnder;
