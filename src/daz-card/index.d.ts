// src/index.d.ts
declare module "@sliderzz/daz-ui" {
    import React from "react";

    interface DazcardProps {
        title: string;
        desc: string;
        src: string;
        imageAltText: string;
    }

    export const Dazcard: React.FC<DazcardProps>;
}
