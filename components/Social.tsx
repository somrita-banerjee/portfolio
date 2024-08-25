import Link from "next/link";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/somrita-banerjee" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/somrita-banerjee/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/s_om_rita/" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/somrita.banerjee.545/" },
    { icon: <FaTwitter />, path: "https://x.com/SomritaBan22742" },
];
const Social = ({ containerStyles, iconstyles }: any) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconstyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
