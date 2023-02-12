function SocialMediaIcon({ height, link, alt, img }: any) {
    return (
        <a href={link} className={"p-0 m-0"} target="_blank">
            <img src={img} alt={alt} className={`w-${height} h-${height} p-0 m-0`} />
        </a>
    );
}

export default SocialMediaIcon;
