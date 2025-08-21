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
        <Card className="w-full max-w-2xl bg-white rounded-xl shadow-lg">
            <CardHeader className="flex justify-center">
                <CardTitle className="text-xl">LOGIN</CardTitle>
            </CardHeader>

        <CardContent>
            <form className="w-full">
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                    id="username"
                    type="text"
                    placeholder="Masukkan Username..."
                    required
                    className="w-full"
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="Masukkan Password..."
                    required
                    className="w-full"
                />
                </div>
            </div>
            </form>
        </CardContent>

        <CardFooter className="flex-col gap-2 w-full">
            <Button type="submit" className="w-full">
            Login
            </Button>
        </CardFooter>
        </Card>
    )
}
