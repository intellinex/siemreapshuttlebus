import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
// import { MapProvider } from "@/contexts/MapProvider";
import React, { Fragment } from "react";

export default function FrontEndLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        // <MapProvider>
        //     <HeaderComponent />
        //     {children}
        //     <FooterComponent />
        // </MapProvider>
        <Fragment>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </Fragment>
    )
}