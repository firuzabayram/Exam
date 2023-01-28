import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    img: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
    complete: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    guide: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    imgtwo: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    author: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
 
    number: Yup.number()
    .required("Required"),
 
});

