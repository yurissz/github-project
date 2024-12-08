import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { InputFormProps } from "@/interface/InputFormI"
import api from "@/services/api"


const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function InputForm({ setUsername, setRepos }: InputFormProps) {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })

        try {
            const { data: responseUser } = await api.get(`/${data.username}`)
            setUsername(responseUser)

            const { data: responserRepos } = await api.get(`/${data.username}/repos`)
            setRepos(responserRepos)


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-[350px]">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full max-w-md mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg font-sourcesans3 text-[#525F7F]">KontChallenge</FormLabel>
                                <FormControl>
                                    <Input

                                        placeholder="Digite um username do GitHub..."
                                        className=" text-[#525F7F] font-sourcesans3 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription className="text-sm text-gray-500 font-sourcesans3">
                                    Você acessará as principais informações do perfil e seus repositórios
                                </FormDescription>
                                <FormMessage className="text-red-500 text-sm" />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className=" font-sourcesans3 w-full py-3 bg-[#1DE9B6] text-[#525F7F] rounded-md hover:bg-[#1DE9B6]/80 focus:outline-none focus:ring-2 focus:ring-[#1DE9B6]"
                    >
                        Enviar
                    </Button>
                </form>
            </Form>
        </div>
    )
}
