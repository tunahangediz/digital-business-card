const initialFormValues = {
  name: "Laura Smith",
  profession: "Frontend Developer",
  navLinks: { email: "", linkedin: "" },
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
      url: "https://github.com/",
      placeholder: "github username ",
      active: true,
    },

    {
      name: "facebook",
      url: "",
      placeholder: "facebook url",
      active: true,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/",
      placeholder: "Instagram username without @ ",
      active: true,
    },
    {
      name: "twitter",
      url: "https://twitter.com/",
      placeholder: "Twitter username without @",
      active: true,
    },
  ],
};
export default initialFormValues;
