import { useState } from 'react';
import iconegithub from './assets/icone-github-violet.png';
import { InputForm } from './components/inputForm';
import { RepositoryCard } from './components/repositoryCard';
import { UserCard } from './components/userCard';
import { UsernameI } from './interface/UsernameI';
import { RepositoryI } from './interface/RepositoryI';

export default function App() {
    const [username, setUsername] = useState<UsernameI | undefined>(undefined);
    const [repos, setRepos] = useState<RepositoryI[] | undefined>(undefined);

    return (
        <div>
            {username !== undefined && (
                <div className="flex flex-col items-center text-center py-8">
                    <img src={iconegithub} className="max-w-12 py-12" alt="Logo github" />
                    <UserCard username={username} />
                    {repos && repos.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full px-4">
                            {repos.map((repo) => (
                                <RepositoryCard key={repo.html_url} repository={repo} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted-foreground mt-4 ">
                            Este usuário não possui repositórios públicos.
                        </p>
                    )}
                </div>
            )}
            {username === undefined && (
                <section className="flex flex-col items-center text-center py-8">
                    <img src={iconegithub} className="max-w-12 py-12" alt="Logo github" />
                    <div className="px-4">
                        <InputForm
                            username={username}
                            setUsername={setUsername}
                            setRepos={setRepos}
                            repos={repos}
                        />
                    </div>
                </section>
            )}
        </div>
    );
}
