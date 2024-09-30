import React from "react";
import "./Dazcard.css";
interface Props {
    title?: string;
    desc?: string;
    src?: string;
    imageAltText: string;
    id?: string;
    buttonText?: string;
    handleOnClick?: () => void;
}
declare const Dazcard: React.FC<Props>;
export default Dazcard;
