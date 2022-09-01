import Input from "../../Input";
import TextArea from "../../UI/TextArea";

function ContentForm({ formik }) {
  return (
    <form className=" max-w-md w-full mx-auto md:mx-0  my-4 bg-[#1A1B22] p-8 flex flex-col gap-4 ">
      <div>
        <label htmlFor="name">About</label>
        <TextArea
          value={formik.values.contents.about}
          onChange={formik.handleChange}
          name={"contents.about"}
          id="contents.about"
          type="text"
          label={"About"}
          placeHolder="Tell us about yourself"
        ></TextArea>
      </div>
      <div>
        <label htmlFor="name">Interests</label>
        <TextArea
          value={formik.values.contents.interests}
          onChange={formik.handleChange}
          name={"contents.interests"}
          id={"contents.interests"}
          type="text"
          label={"About"}
          placeHolder="Tell us about yourself"
        ></TextArea>
      </div>
    </form>
  );
}

export default ContentForm;
