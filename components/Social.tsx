import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface SocialProps {
    containerStyles?: string;
    iconstyles?: string;
    showAll?: boolean;
}

const primarySocials = [
    { icon: <FaGithub />, path: "https://github.com/somrita-banerjee", name: "GitHub" },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/somrita-banerjee/",
        name: "LinkedIn",
    },
];

const secondarySocials = [
    { icon: <FaInstagram />, path: "https://www.instagram.com/s_om_rita/", name: "Instagram" },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/somrita.banerjee.545/",
        name: "Facebook",
    },
    { icon: <FaTwitter />, path: "https://x.com/SomritaBan22742", name: "X (Twitter)" },
];

const Social = ({ containerStyles = "flex gap-6", iconstyles, showAll = false }: SocialProps) => {
    const list = showAll ? [...primarySocials, ...secondarySocials] : primarySocials;

    return (
        <div className={containerStyles}>
            {list.map((item, index) => {
                return (
                    <a
                        key={index}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconstyles}
                        aria-label={item.name}
                    >
                        {item.icon}
                    </a>
                );
            })}
        </div>
    );
};

export default Social;
