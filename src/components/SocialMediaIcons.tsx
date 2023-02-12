import facebook from "../assets/logo--facebook.svg";
import github_svg from "../assets/logo--github.svg";
import linkedin from "../assets/logo--linkedin.svg";
import twitter from "../assets/logo--twitter.svg";
import SocialMediaIcon from "./SocialMediaIcon";

function SocialMediaIcons({ height }: any) {
    return (
        <>
            <SocialMediaIcon
                link={"https://github.com/Spounka"}
                img={github_svg}
                alt="github icon"
                height={height}
            />
            <SocialMediaIcon
                link={"https://www.linkedin.com/in/nazih-boudaakkar-2220b8172/"}
                img={linkedin}
                alt="linkedin icon"
                height={height}
            />
            <SocialMediaIcon
                link={"https://twitter.com/spounka346"}
                img={twitter}
                alt="twitter icon"
                height={height}
            />
            <SocialMediaIcon
                link={"https://facebook.com/nazboudaakakr"}
                img={facebook}
                alt="facebook icon"
                height={height}
            />
        </>
    );
}

export default SocialMediaIcons;
