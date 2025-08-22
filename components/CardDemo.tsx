"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardDemo() {
    return (
        <Card className="flex bg-white rounded-xl  max-w-md px-50">
            <CardHeader className="flex justify-center">
                <CardTitle className="text-xl font-bold">LOGIN</CardTitle>
            </CardHeader>

            <CardContent>
                <form className="w-full">
                    <div className="flex flex-col gap-6 -mx-50 font-semibold">
                        <div className="grid gap-2 ">
                            <Label htmlFor="username" className="">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Masukkan Username..."
                                required
                                className="flex"
                            />
                        </div>
                        <div className="grid gap-2 ">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Masukkan Password..."
                                required
                                className="flex"
                            />
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex-col gap-2 w-full">
                <Button type="submit" className=" bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold py-2 rounded-md hover:from-blue-700 hover:to-blue-500 transition">
                Login
                </Button>
            </CardFooter>
        </Card>
    )
}
