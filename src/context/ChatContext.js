import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

const CHANGE_USER = "CHANGE_USER"
const LOG_OUT = "LOG_OUT"

export const ChatContext = createContext()

export const ChatContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext)

    const INITIAL_STATE = {
        isSelected: false,
        chatId: "null",
        user: {}
    }

    const chatReducer = (state, action) => {
        switch (action.type) {
            case CHANGE_USER:
                return {
                    isSelected: true,
                    user: action.payload,
                    chatId: currentUser.uid > action.payload.uid
                        ? currentUser.uid + action.payload.uid
                        : action.payload.uid + currentUser.uid
                }
            case LOG_OUT:
                return {
                    isSelected: false,
                    user: {},
                    chatId: "null"
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)

    return (
        <ChatContext.Provider value={{ data: state, dispatch, CHANGE_USER, LOG_OUT }}>
            {children}
        </ChatContext.Provider>
    )
} 
