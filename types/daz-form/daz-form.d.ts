import React from "react";
import "./daz-form.css";
interface FormProps {
    onSubmit: (formData: {
        [key: string]: string;
    }) => void;
    submitButtonText: string;
}
declare const Form: React.FC<FormProps>;
export default Form;
