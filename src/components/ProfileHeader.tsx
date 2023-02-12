import arrow from "../assets/Arrow.svg";
import ProfileImage from "./ProfileImage";

function ProfileHeader() {
    return (
        <div
            className={
                "flex justify-start md:justify-center font-semibold m-0 p-0 mt-[37px] gap-2.5"
            }
        >
            <div className="flex gap-1 md:hidden">
                <h4 className={"font-poppins-sans self-center"}>IT's me</h4>
                <img src={arrow} alt="right pointing arrow" className="max-w-[100px]" />
            </div>
            <ProfileImage />
        </div>
    );
}

export default ProfileHeader;
