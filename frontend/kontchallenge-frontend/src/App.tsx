import { useState } from 'react'
import logoKontulari from './assets/logoKontulari.webp'
import { InputForm } from './components/inputForm'
import { RepositoryCard } from './components/repositoryCard'
import { UserCard } from './components/userCard'
import { UsernameI } from './interface/UsernameI'

export default function App() {

    const [username, setUsername] = useState<UsernameI | undefined>(undefined)

    return (
        <div >
            {
                username !== undefined &&
                <div className="flex flex-col items-center text-center justify-content py-8">
                    <UserCard username={username} className=''></UserCard>
                </div>

            }
            {
                username === undefined &&
                <section className="flex flex-col items-center text-center justify-content py-8">
                    <img src={logoKontulari} alt="logoKontulariImage" className="mb-4 " />
                    <div className="px-4">
                        <InputForm username={username} setUsername={setUsername} />
                    </div>
                </section>
            }
        </div>
    )
}
