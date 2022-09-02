import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import capitalize from "../../../utils/capitalize";
import capatlize from "../../../utils/capitalize";
import Input from "../../Input";
import CheckBox from "../../UI/CheckBox";

function SocialForm({ formik }) {
  return (
    <form className="max-w-md w-full mx-auto md:mx-0  bg-[#1A1B22] p-8   gap-4 flex flex-col">
      <div className="flex  justify-between w-full">
        {formik.values.socialLinks.map((link, i) => (
          <CheckBox
            onChange={() =>
              formik.setFieldValue(`socialLinks[${i}].active`, !link.active)
            }
            value={link.active}
            name={`socialLinks[${i}].${link.name}`}
            label={capitalize(link.name)}
            id={link.name}
            checked={link.active}
          />
        ))}
      </div>

      {formik.values.socialLinks.map((link, i) => (
        <AnimatePresence>
          {link.active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <label htmlFor="navLinks.linkedin">{capatlize(link.name)} </label>
              <Input
                id={`socialLinks[${i}].username`}
                name={`socialLinks[${i}].username`}
                placeHolder={link.placeholder}
                type="text"
                onChange={formik.handleChange}
                value={link.username}
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </form>
  );
}

export default SocialForm;
