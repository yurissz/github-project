import { BookDown, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export function RepositoryCard({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[300px]", className)} {...props}>
            <CardHeader>
                <div className="flex">
                    <BookDown />
                    <CardTitle className="px-2">Repository Name</CardTitle>
                </div>
                <CardDescription>Repository description</CardDescription>
                <CardDescription>Status: Public</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <Wrench />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Typescript, Javascript
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
