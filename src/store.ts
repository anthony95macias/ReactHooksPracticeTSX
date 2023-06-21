import { createContext } from "react";

const inintalState = {
    first: 'Anthony', 
    last: 'Macias',
};

export type userState = typeof inintalState; 

const context = createContext<typeof inintalState>(inintalState);

export default context;