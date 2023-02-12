import arrow from "../assets/Arrow.svg";
import ProfileImage from "./ProfileImage";

function ProfileHeader() {
    return (
        <div
            className={
                "flex justify-start md:justify-center font-semibold mt-[37px] gap-2.5 transform:translate(-50%)"
            }
        >
            <h4 className={"font-poppins-sans self-center"}>IT's me</h4>
            <img src={arrow} alt="right pointing arrow" />
            <ProfileImage />
        </div>
    );
}

export default ProfileHeader;
