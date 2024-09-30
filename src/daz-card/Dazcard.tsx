// src/daz-card/Dazcard.tsx
import React from "react";
import "./Dazcard.css";

interface Props {
    title?: string;
    desc?: string;
    src?: string;
    imageAltText: string;
    id?: string;
    buttonText?: string;
    handleOnClick?: () => void; // Optional prop
}

const Dazcard: React.FC<Props> = ({ title, desc, src, imageAltText, id, buttonText, handleOnClick }) => {
    return (
        <div
            className="card"
            id={id}
        >
            <div className="card-image">
                <img
                    src={src}
                    alt={imageAltText}
                />
            </div>
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
            {buttonText && (
                <div className="card-button">
                    <button onClick={handleOnClick}>{buttonText}</button>
                </div>
            )}
        </div>
    );
};

export default Dazcard;
