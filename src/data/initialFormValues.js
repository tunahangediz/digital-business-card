const initialFormValues = {
  name: "Tunahan Gediz",
  profession: "Frontend Developer",
  navLinks: {
    email: "",
    linkedin: "https://www.linkedin.com/in/tunahan-gediz/",
  },
  imageActive: true,
  image: "blob:http://localhost:3000/886bf4b6-1ae9-4880-affd-35e6fafbd907",
  contents: {
    about:
      "I am a computer engineering student trying to be a Front End Developer.I created projects with JavaScript. I also have experience with React and Ruby on Rails.",
    interests: "Front-End development,   web design, JavaScript, React",
  },
  personalWebsite: "github.com/tunahangediz",
  socialLinks: [
    {
      name: "github",
      url: "github.com/",
      username: "tunahangediz",
      placeholder: "github username ",
      active: true,
    },
    {
      name: "facebook",
      url: "facebook.com/",
      username: "facebookUserName",
      placeholder: "facebook username",
      active: false,
    },
    {
      name: "instagram",
      url: "instagram.com/",
      username: "tunahangediz",
      placeholder: "Instagram username without @ ",
      active: true,
    },
    {
      name: "twitter",
      url: "twitter.com/",
      username: "tunahangediz",
      placeholder: "Twitter username without @",
      active: true,
    },
  ],
};
export default initialFormValues;
