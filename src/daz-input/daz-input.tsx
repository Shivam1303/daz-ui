import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./daz-input.css";

interface Props {
    inputField: "name" | "email" | "password";
    id?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DazInput: React.FC<Props> = ({ inputField, id, value, onChange }) => {
    let placeholder = "";
    let type = "text";
    let IconComponent = FaUser;

    switch (inputField) {
        case "name":
            placeholder = "Enter your name";
            IconComponent = FaUser;
            break;
        case "email":
            placeholder = "Enter your email";
            type = "email";
            IconComponent = FaEnvelope;
            break;
        case "password":
            placeholder = "Enter your password";
            type = "password";
            IconComponent = FaLock;
            break;
        default:
            placeholder = "Enter text";
    }

    return (
        <div className="group">
            <IconComponent className="icon" />
            <input className="input" id={id} type={type} placeholder={placeholder} name={inputField} value={value} onChange={onChange} />
        </div>
    );
};

export default DazInput;
