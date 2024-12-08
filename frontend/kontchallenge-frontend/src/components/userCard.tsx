import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { UsernameI } from "@/interface/UsernameI";

type CardProps = React.ComponentProps<typeof Card> & {
    username: UsernameI;
};

export function UserCard({ username, className, ...props }: CardProps) {
    console.log(username.url);

    return (
        <Card
            className={cn(
                "w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 mx-auto",
                className
            )}
            {...props}
        >
            <CardHeader>
                <div className="flex items-center space-x-2">
                    <Avatar className="w-12 h-12">
                        <AvatarImage
                            src={username.avatar_url}
                            alt={username.login || "User Avatar"}
                            className="rounded-full"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle className="font-sourcesans3 text-gray-700 text-lg sm:text-xl">
                        {username.name}
                    </CardTitle>
                </div>
                <CardDescription className="text-sm text-gray-500">
                    {username.login}
                </CardDescription>
                <CardDescription className="text-sm text-gray-500">
                    {username.bio !== null ? username.bio : "Biografia do usuário não informada"}
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none text-gray-700">About</p>
                        <p className="text-sm text-gray-500">Followers: {username.followers}</p>
                        <p className="text-sm text-gray-500">Following: {username.following}</p>
                        <p className="text-sm text-gray-500">
                            Repositories: {username.public_repos}
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <a
                    href={username.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <Button className="font-sourcesans3 w-full py-3 bg-teal-400 text-gray-700 rounded-md hover:bg-teal-400/80 focus:outline-none focus:ring-2 focus:ring-teal-400">
                        Go to profile
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
}
