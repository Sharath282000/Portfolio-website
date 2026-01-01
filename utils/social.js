import Instagramicon from "../src/assets/Images/instagram.png"
import Facebookicon from "../src/assets/Images/facebook.png";
import Twittericon from "../src/assets/Images/twitter-x.png";
import LinkedInicon from "../src/assets/Images/linkedin.png";
import Githubicon from "../src/assets/Images/github.png";
import Twitterdark from "../src/assets/Images/icons8-twitterx-48 (1).png";
import Githubdark from "../src/assets/Images/icons8-github-50.png";


export const socials =[
    {
        id:1,
        link : "https://x.com/Sharath_tech",
        icons : {
            light: Twittericon,
            dark : Twitterdark,
        },
        alt : "X"
    },
    {
        id:2,
        link : "https://github.com/Sharath282000",
        icons : {
            light: Githubicon,
            dark : Githubdark,
        },
        alt: "GitHub",
    },
    {
        id:3,
        link : "https://www.linkedin.com/in/sharath-m-6936671b0/",
        icons : {
            light : LinkedInicon,
            dark : LinkedInicon,
        },
        alt : "LinkedIn",
    },
    {
        id: 4,
        link : "https://www.facebook.com/thala.sharath.5/",
        icons : {
            light : Facebookicon,
            dark : Facebookicon,
        },
        alt : "Facebook",
    },
    {
        id: 5,
        link : "https://www.instagram.com/sharath_officl/",
        icons : {
            light: Instagramicon,
            dark : Instagramicon,
        },
        alt : "Instagram"
    }
];