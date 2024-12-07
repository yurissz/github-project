import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { UsernameI } from "@/interface/UsernameI"

type CardProps = React.ComponentProps<typeof Card> & {
    username: UsernameI
}

export function UserCard({ username, className, ...props }: CardProps) {
    console.log(username.url);

    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <div className="flex items-center space-x-2">
                    <Avatar className="w-9 h-9">
                        <AvatarImage src={username.avatar_url} alt="@shadcn" className="rounded-full" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle>{username.name}</CardTitle>
                </div>
                <CardDescription>{username.login}</CardDescription>
                <CardDescription>{username.bio}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            About
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Followers: {username.followers}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Folling: {username.following}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Repositories: {username.public_repos}
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <a href={username.html_url} target="_blank" rel="noopener noreferrer" className="w-full" >
                    <Button className="w-full">
                        Go to profile
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )
}
