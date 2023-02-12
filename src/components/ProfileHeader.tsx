import ProfileImage from "./ProfileImage";

function ProfileHeader() {
    return (
        <div
            className={
                "flex justify-start md:justify-center font-semibold m-0 p-0 mt-[37px] gap-2.5"
            }
        >
            <ProfileImage />
        </div>
    );
}

export default ProfileHeader;
