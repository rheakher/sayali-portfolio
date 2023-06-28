// Navigation Bar
const navBar = {
  show: true,
};

// Main Body
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sayali",
  middleName: "",
  lastName: "Marathe",
  message: " Some text here ",
  icons: [
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/marathesayu/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/marathesayu/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/marathesayu/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  //imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message: "Recent graduate with a Master of Science in Global Affairs, excited to continue my career in Digital Marketing Strategy and Brand Marketing. Expert in managing profiles on social media platforms like YouTube, Twitter and LinkedIn. Successful in expanding online presence through personalised interactions with followers."
  //resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

const articles = {
    show: true,
    heading: "Articles",
    data: [
        {
            title: "AND IT'S LIVE! The Premier League 2022/23 season, as predicted by you...",
            link: "https://www.theaccessiblemagazine.com/post/and-it-s-live-the-premier-league-2022-23-season-as-predicted-by-you",
            publisher: "The Accessible Magazine"
        },
        {
            title: "AND IT'S LIVE! The Premier League 2022/23 season, as predicted by you...",
            link: "https://www.theaccessiblemagazine.com/post/and-it-s-live-the-premier-league-2022-23-season-as-predicted-by-you",
            publisher: "The Accessible Magazine"
        }
    ]
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "marathesayu@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

export { navBar, mainBody, about, articles, skills, getInTouch, experiences };
