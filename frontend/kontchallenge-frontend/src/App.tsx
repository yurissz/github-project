import { useState } from 'react';
import logoKontulari from './assets/logoKontulari.webp';
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
                    <img src={logoKontulari} className="py-4" alt="Logo Kontulari" />
                    <UserCard username={username} />
                    {/* Grid Responsiva */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full px-4">
                        {repos?.map((repo) => (
                            <RepositoryCard key={repo.html_url} repository={repo} />
                        ))}
                    </div>
                </div>
            )}
            {username === undefined && (
                <section className="flex flex-col items-center text-center py-8">
                    <img src={logoKontulari} alt="Logo Kontulari" className="mb-4" />
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
