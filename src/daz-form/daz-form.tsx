import React, { useState } from "react";
import DazInput from "../daz-input/daz-input";
import "./daz-form.css";
interface FormProps {
    onSubmit: (formData: { [key: string]: string }) => void;
    submitButtonText: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, submitButtonText }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <DazInput inputField="name" id="name" value={formData.name} onChange={handleChange} />
            <DazInput inputField="email" id="email" value={formData.email} onChange={handleChange} />
            <DazInput inputField="password" id="password" value={formData.password} onChange={handleChange} />
            <button type="submit">{submitButtonText}</button>
        </form>
    );
};

export default Form;
