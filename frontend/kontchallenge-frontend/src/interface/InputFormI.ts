import { UsernameI } from "./UsernameI";

export interface InputFormProps {
    username: UsernameI | undefined;
    setUsername: (newUsername: UsernameI | undefined) => void;
}