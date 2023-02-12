/*
 * Copyright (c) 2023. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import arrow from "../assets/Arrow.svg";
import profile from "../assets/profile.jpg";

function ProfileImage() {
    return (
        <div
            className={`flex items-center relative p-[.12rem] w-[120px] h-[120px] rounded-full
                        bg-gradient-to-br from-main-blue to-main-dark m-0`}
        >
            <div className={"rounded-full bg-white p-1"}>
                <img src={profile} alt={"img"} className={"rounded-full"} />
            </div>
            <div className="hidden md:flex absolute md:-left-[110%] gap-2">
                <h4 className={"font-poppins-sans self-center"}>IT's me</h4>
                <img src={arrow} alt="right pointing arrow" />
            </div>
        </div>
    );
}

export default ProfileImage;
