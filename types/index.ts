// an interface specifies how a specific structure should look like and what variables and values it should have.

import { MouseEventHandler } from "react";

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }

  
export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>; 
}

export interface CustomFilterProps {
    title: string;

}


export interface SearchManuFacturerProps {
    manufacturer: string;
    // setManu is a function(setter func) that takes in a string and doesnt return anything
    setManuFacturer: (manufacturer: string) => void;
  }
  