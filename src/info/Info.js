import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.svg"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.webp"
import mock9 from "../img/mock9.svg"
import mock10 from "../img/mock10.png"
import mock11 from "../img/mock11.png"
import mock12 from "../img/mock12.png"

export let colors = ["rgb(255, 105, 180)", "rgb(255, 105, 180)", "rgb(0, 0, 0)"];

export const info = {
    firstName: "Thando",
    lastName: "Khoase",
    initials: "TK", 
    position: "a Full Stack Engineer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '💻 ',
            text: 'fueled by challenges (corny but true)'
        },
        {
            emoji: '🌎',
            text: 'based in the South Africa'
        },
        {
            emoji: "💼",
            text: "Full Stack Engineer"
        },
        {
            emoji: "📧",
            text: "thandokhoase19@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/music-tko",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/thay-khoase026/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/ThayDevToBe",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Thando. I'm a Frontend Engineer. I'm selftaught, I enjoy reading all types of books and playing all times of pc games, and I am always looking to learn more. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'typescript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'wordpress php', 'shopify liquid', 'tailwindcss', 'jQuery', 'redux'],
            exposedTo: ['php', 'firebase']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'music',
            emoji: '🎵'
        }

    ],
    portfolio: [
        {
            image: mock1
        },
        {
            image: mock2
        },
        {
            image: mock9
        },
        {
            image: mock4
        },
        {
            image: mock7
        },
        {
            image: mock6
        },
        {
            image: mock8
        },
        {
            image: mock3
        },
        {
            image: mock5
        },
        {
            image: mock10
        },
        {
            image: mock11
        },
        {
            image: mock12
        }
    ]
}
