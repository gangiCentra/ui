import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Action } from "./actions";

const initialState = {
    showModal: false,
    showAccordian0: false,
    showAccordian01: false,
    showAccordian1: false,
    showAccordian2: false,
    showAccordian3: false,
    showAccordian4: false,
    showAccordian5: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case Action.ShowModal:
            console.log("showing modal");
            return {
                ...state,
                showModal: true,
            };
        case Action.HideModal:
            console.log("hiding modal");
            return {
                ...state,
                showModal: false,
            };
        case Action.showAccordian0:
            console.log("showing Accordian");
            return {
                ...state,
                showAccordian0: true,
            };
        case Action.HideAccordian0:
            console.log("hiding Accordian");
            return {
                ...state,
                showAccordian0: false,
            };
            case Action.ShowAccordian01:
            console.log("showing Accordian");
            return {
                ...state,
                showAccordian01: true,
            };
        case Action.HideAccordian01:
            console.log("hiding Accordian");
            return {
                ...state,
                showAccordian01: false,
            };
            case Action.ShowAccordian1:
            console.log("showing Accordian");
            return {
                ...state,
                showAccordian1: true,
            };
        case Action.HideAccordian1:
            console.log("hiding Accordian");
            return {
                ...state,
                showAccordian1: false,
            };
            case Action.ShowAccordian2:
            console.log("showing Accordian");
            return {
                ...state,
                showAccordian2: true,
            };
        case Action.HideAccordian2:
            console.log("hiding Accordian");
            return {
                ...state,
                showAccordian2: false,
            };
            case Action.ShowAccordian3:
            console.log("showing Accordian");
            return {
                ...state,
                showAccordian3: true,
            };
        case Action.HideAccordian3:
            console.log("hiding Accordian");
            return {
                ...state,
                showAccordian3: false,
            };
            case Action.ShowAccordian4:
            console.log("showing Accordian");
            return {
                ...state,
                showAccordian4: true,
            };
        case Action.HideAccordian4:
            console.log("hiding Accordian");
            return {
                ...state,
                showAccordian4: false,
            };
            case Action.ShowAccordian5:
            console.log("showing Accordian");
            return {
                ...state,
                showAccordian5: true,
            };
        case Action.HideAccordian5:
            console.log("hiding Accordian");
            return {
                ...state,
                showAccordian5: false,
            };

        default:
            return state;
    }
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));