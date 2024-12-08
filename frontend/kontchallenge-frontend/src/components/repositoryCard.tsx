import { BookDown, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { RepositoryI } from "@/interface/RepositoryI";
import { formatDate } from "@/utils/formatToDate";

type CardProps = React.ComponentProps<typeof Card> & {
    repository: RepositoryI;
};

export function RepositoryCard({ className, repository, ...props }: CardProps) {
    return (
        <Card
            className={cn(
                "w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 mx-auto",
                className
            )}
            {...props}
        >
            <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                <CardHeader>
                    <div className="flex items-center space-x-2">
                        <BookDown className="text-teal-400" size={20} />
                        <CardTitle className="font-sourcesans3 text-gray-700 text-lg sm:text-xl">
                            {repository.name !== null ? repository.name : "Nome não informado"}
                        </CardTitle>
                    </div>
                    <CardDescription className="text-sm text-gray-500">
                        {repository.description !== null
                            ? repository.description
                            : "Repositório sem descrição"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="flex items-center space-x-4 rounded-md border p-4">
                        <Wrench className="text-teal-400" size={20} />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm text-gray-500">
                                {repository.language !== null
                                    ? repository.language
                                    : "Tecnologia não informada"}
                            </p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col text-sm text-gray-500 space-y-1">
                    <p>Created: {formatDate(repository.created_at)}</p>
                    <p>Last update: {formatDate(repository.updated_at)}</p>
                </CardFooter>
            </a>
        </Card>
    );
}
