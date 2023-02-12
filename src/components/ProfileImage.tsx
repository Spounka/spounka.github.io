/*
 * Copyright (c) 2023. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

import profile from '../assets/profile.jpg';

function ProfileImage() {
    return (
        <div
            className={"p-[.12rem] w-[120px] h-[120px] rounded-full bg-gradient-to-br from-main-blue to-main-dark"}>
            <div className={'rounded-full bg-white p-1'}>
                <img src={profile} alt={"img"} className={"rounded-full"} />
            </div>
        </div>
    );
}

export default ProfileImage;
