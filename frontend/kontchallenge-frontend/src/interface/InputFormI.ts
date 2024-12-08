import { RepositoryI } from "./RepositoryI";
import { UsernameI } from "./UsernameI";

export interface InputFormProps {
    username: UsernameI | undefined;
    setUsername: (newUsername: UsernameI | undefined) => void;
    repos: RepositoryI[] | undefined;
    setRepos: (newRepos: RepositoryI[] | undefined) => void;
}