const initialFormValues = {
  name: "Laura Smith",
  profession: "Frontend Developer",
  navLinks: { email: "", linkedin: "" },
  imageActive: true,
  image: "",
  contents: {
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ratione odio quisquam  Q dolorum ratione odio quisquam fuga!",
    interests:
      "Lorem, ipsum dolor sit amet consectetur ratione odio quisquam  adipisicing elit. dolorum ratione odio quisquam fuga!",
  },
  personalWebsite: "mywepage.com",
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
      active: true,
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
