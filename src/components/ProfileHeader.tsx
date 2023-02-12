import ProfileImage from "./ProfileImage";
import arrow from "../assets/Arrow.svg";

function ProfileHeader() {
    return (
        <div
            className={
                "flex justify-start md:justify-center font-semibold m-0 p-0 mt-[37px] gap-2.5"
            }
        >
            <div className="md:hidden">
                <h4 className={"font-poppins-sans self-center"}>IT's me</h4>
                <img src={arrow} alt="right pointing arrow" />
            </div>
            <ProfileImage />
        </div>
    );
}

export default ProfileHeader;
