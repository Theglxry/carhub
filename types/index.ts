// an interface specifies how a specific structure should look like and what variables and values it should have.

import { MouseEventHandler } from "react";


export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>; 
}