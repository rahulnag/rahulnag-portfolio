/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Nag",
  title: "Hey There, I'm Rahul",
  subTitle: emoji(
    "A passionate self-taught frontend web developer and Founder/ Tech Blogger at CapsCode. I am having an experiende in building Web and Mobile applications with JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rahulnag",
  linkedin: "https://www.linkedin.com/in/rahulnag/",
  gmail: "rahulnag67@gmail.com",
  facebook: "https://www.facebook.com/iamrahulnag",
  blog: "https://www.capscode.in/blog",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Currentyl I am working as a Lead Software Developer @Bridgei2i and I spend most of my time in writing codes and in my free timing i write tech blogs for you.",
  skills: [
    emoji(
      "⚡ I develop fully responsive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ I develop Progressive Web Applications ( PWA )"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Okta Authentication/ Google Auth etc..."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "PWA",
      fontAwesomeClassname: "fas fa-mobile-alt",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "ab fa-atlassian",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "MaterialUI",
      fontAwesomeClassname: "fab fa-mdb",
    },
    {
      skillName: "Ant Design",
      fontAwesomeClassname: "fas fa-stop-circle",
    },
    {
      skillName: "React-Table",
      fontAwesomeClassname: "fas fa-table",
    },
    {
      skillName: "Amchart",
      fontAwesomeClassname: "fas fa-chart-line",
    },
    {
      skillName: "Rechart",
      fontAwesomeClassname: "fas fa-chart-bar",
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github-square",
    },
    {
      skillName: "BitBucket",
      fontAwesomeClassname: "fab fa-bitbucket",
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-rocket",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Haldia Institute of Technology",
      logo: require("./assets/images/haldia.png"),
      subHeader: "Bacheloer in Computer Science & Engineering",
      duration: "August 2013 - July 2017",
      desc:
        "Conducted 1 week workshop on Android Application Development with the capacity of 100+ students",
      descBullets: [
        "Program Head of Computer Society of India student chapter",
        "Head at Photography Club",
        "Active volunteer at Photography Club",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Software Engineer",
      company: "Bridgei2i",
      companylogo: require("./assets/images/bridgei2i.png"),
      date: "Jan 2021 – Present",
      desc:
        "Currently developing reporting tool for Clorox in ReactJS which contains lot of Graph and Table with CRUD opeations.",
      descBullets: [
        "Converting Figma into real Tech",
        "Frontend Developer",
        "Working with libraries/ framework like React-Table, Amcart, MaterialUI, ContextAPI",
        "Azure, adding custom domains and SSL certificates, Docker",
      ],
    },
    {
      role: "Application Developer Specialist 1",
      company: "IQVIA (ex. IMS Health)",
      companylogo: require("./assets/images/iqvia.png"),
      date: "Oct 2017 – Oct 2020",
      desc:
        "Joined as a Fresher and worked for clients like AMA, Siemens, Mylan BMS",
      descBullets: [
        "Worked on modules of GoIQ web app & Roche Client in ReactJS, aclient dashboard application to do CRUD operation from UI",
        "Worked in MDM for product support, Nucleus360  ",
      ],
    },
    {
      role: "Intern",
      company: "Tata Technologies Ltd, Jamshedpur",
      companylogo: require("./assets/images/tata.png"),
      date: "Jul 2016 – Aug 2016",
      desc:
        "Android app for online Appointment from doctor or to book the time slot whenever the time slot is available for the doctors in TATA Hospital.",
      descBullets: [
        "Tech used are REST API's, OkHTTP, PhpMyAdmin, php, SQLite, Postman",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "Some of my interesting and helpful projects",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to hire me | Discuss a project | Need a web developer | Need a freelancer",
  number: "+91-8986774801",
  email_address: "mr.rahulnag67@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
