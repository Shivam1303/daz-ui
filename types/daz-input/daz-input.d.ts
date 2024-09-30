import React from "react";
import "./daz-input.css";
interface Props {
    inputField: "name" | "email" | "password";
    id?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const DazInput: React.FC<Props>;
export default DazInput;
