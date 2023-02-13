import email from "../assets/sms full.svg";
import { MediumBlogButton } from "../components/MediumBlogButton";
import SocialMediaIcon from "../components/SocialMediaIcon";
import SocialMediaIcons from "../components/SocialMediaIcons";

function Footer() {
    return (
        <footer
            className={`z-50 sticky bottom-0 left-0 right-0 w-[90vw] flex place-self-center
                        md:hidden align-middle mt-auto gap-4 pr-0 xs:pr-2 pl-2 border-t-2 p-3 ml-0 mr-0 xs:mr-2 bg-white`}
        >
            <div className={"flex gap-4 align-middle h-full w-full pr-0 mr-0"}>
                <div className="mt-auto mb-auto flex gap-4">
                    <SocialMediaIcons height={6} />
                    <SocialMediaIcon
                        link={"mailto:boudaakkarnazih@gmail.com"}
                        img={email}
                        alt="email icon"
                        height={6}
                    />
                </div>
                <MediumBlogButton />
            </div>
        </footer>
    );
}

export default Footer;
