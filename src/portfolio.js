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
    "A passionate self-taught frontend web developer and Founder/ Tech Blogger at CapsCode. I am having an experience in building Web and Mobile applications with JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12CtAZK7Irzs_T82C5NFhe8HZixmbv-n5/view?usp=sharing", // Set to empty to hide the button
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
      image: require("./assets/images/vaccine_project.jpg"),
      projectName: "Covid Vaccine Tracker",
      projectDesc: "Live covid vaccine tracker with voice enabled notification",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://searchvaccine.netlify.app/#/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/myemoji_project.JPG"),
      projectName: "My Emoji",
      projectDesc:
        "Contains 1000+ Emojis Which You Can Copy and Use It Anywhere You Want",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://myemoji.ml/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/colorscube_project.JPG"),
      projectName: "Colors Cube",
      projectDesc:
        "Developer's choice amazing colors(neon, mate finish, solid, cool etc.)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.colorscube.ml/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/iris_project.JPG"),
      projectName: "IRIS Legal",
      projectDesc:
        "Website for a Delhi based startup who provide Legal Solutions",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://irislegal.in",
        },
      ],
    },
    {
      image: require("./assets/images/selfless_project.JPG"),
      projectName: "Selfless Family",
      projectDesc:
        "Website for a startup who provide info for Job Openings and help fresher to get JOB",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://selflessfamily.in",
        },
      ],
    },
    {
      image: require("./assets/images/capscode_project.JPG"),
      projectName: "CapsCode",
      projectDesc:
        "My startup website where i used to write blogs and provide other services",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://capscode.in",
        },
      ],
    },
    {
      image: require("./assets/images/glassy_project.JPG"),
      projectName: "Glassy Effect",
      projectDesc: "NPM package to get glassy effect in your project",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rahulnag.github.io/glassy-effect/",
        },
      ],
    },
    {
      image: require("./assets/images/jsonformatter_project.JPG"),
      projectName: "JSON Formatter",
      projectDesc: "A online JSON formatter tool to format your JSON data",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rahulnag.github.io/json-formatter/",
        },
      ],
    },
    {
      image: require("./assets/images/covid_project.JPG"),
      projectName: "COVID Case Tracker",
      projectDesc:
        "Website to track COVID cases in INDIA, developed when we have 2 case of covid19",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rahulnag.github.io/covid19/",
        },
      ],
    },
    {
      image: require("./assets/images/todo_project.JPG"),
      projectName: "Dragable TODO",
      projectDesc:
        "Dragable TODO, where you can drag your task a/c to priority",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://todobynag.netlify.app/",
        },
      ],
    },
    {
      image: require("./assets/images/covid_project.JPG"),
      projectName: "CCL Learning",
      projectDesc: "A simple website for my friend,to get the youtube video",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cclkk.netlify.app/#/",
        },
      ],
    },
    {
      image: require("./assets/images/deliverytalla_project.JPG"),
      projectName: "DeliveryTalla",
      projectDesc:
        "Webapp from where you can order stuffs from your nearby location and track it",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://deliverytalla.netlify.app/#/",
        },
      ],
    },
    {
      image: require("./assets/images/covid_project.JPG"),
      projectName: "COVID Case Tracker",
      projectDesc:
        "Website to track COVID cases in INDIA, developed when we have 2 case of covid19",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rahulnag.github.io/covid19/",
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
    "I write Technical Blog On Frontend Related Stuffs aling with some Personal Experience in Tech",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url:
        "https://www.capscode.in/blog/how-to-detect-screen-orientation-using-javascript",
      title: "Detect Screen Orientation Using JavaScript",
      description:
        "In this blog we will see How to detect screen orientation using JavaScript",
    },
    {
      url:
        "https://www.capscode.in/blog/how-to-set-variable-as-a-key-name-in-javascript-object",
      title: "Set Variable as keyname in JS Object",
      description:
        "In this blog you are going to learn a very important and useful concept of JavaScript which you will definitely going to use or might have used in Production application, i.e: How to make any variable name as key of an object in JS.",
    },
    {
      url: "https://www.capscode.in/blog/style-console.log-like-a-pro",
      title: "Style console.log() like a PRO",
      description:
        "In this blog I will guide you all through HOW WE CAN STYLE CONSOLE.LOG() USING CSS,I have made 12 different styles for you to make sure that you will not ended up with any confusions.",
    },
    {
      url:
        "https://www.capscode.in/blog/dot-and-bracket-notation-in-javascript",
      title: "DOT & BRACKET Notation in Javascript",
      description:
        "In JavaScript we can access the properties of object using dot notation(person.first_name) and bracket notation(person[first_name]). But what's the difference between these two notations and when to use which one ? ",
    },
    {
      url: "https://www.capscode.in/blog/array.flat-in-javascript",
      title: "Array.flat() method In JavaScript",
      description:
        "In this article i will walk you through one of the important methods of Array in JavaScript i.e Array.flat method, and how to use it effieicntly",
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
    "Want to hire me | Discuss a project | Need a website | Need a freelancer",
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
