"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
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
    const router = useRouter();
    const [formData, setFormData] = useState({
    username: "",
    password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
        ...prev,
        [id]: value,
        }));

        // Hilangkan error saat user mulai mengetik
        if (errors[id as keyof typeof errors]) {
        setErrors((prev) => ({
            ...prev,
            [id]: "",
        }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let newErrors = { username: "", password: "" };

        if (!formData.username) {
        newErrors.username = "Username wajib diisi!";
        }

        if (!formData.password) {
        newErrors.password = "Password wajib diisi!";
        } else if (formData.password.length < 6) {
        newErrors.password = "Password minimal 6 karakter!";
        }

        setErrors(newErrors);

        // Jika tidak ada error, lanjutkan proses login
        if (!newErrors.username && !newErrors.password) {
        router.push("/nextpage");
        // bisa arahkan ke dashboard pakai router.push("/dashboard")
        }
    };


    return (
        <Card className="flex bg-white rounded-xl  max-w-md px-50 font-pop">
            <CardHeader className="flex justify-center">
                <CardTitle className="text-xl font-bold">LOGIN</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex flex-col gap-6 -mx-50 font-semibold">
                        <div className="grid gap-2 ">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Masukkan Username..."
                                value={formData.username}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-lg ${errors.username ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.username && (<p className="text-red-500 text-sm mt-1">{errors.username}</p>)}
                        </div>
                        <div className="grid gap-2 ">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Masukkan Password..."
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"}`}
                                />
                                {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password}</p>)}
                        </div>
                        <div className="flex justify-center mt-4">
                            <Button type="submit" className=" bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold py-2 rounded-md hover:from-blue-700 hover:to-blue-500 transition">Login</Button>
                        </div>
                    </div>

                </form>
            </CardContent>

            <CardFooter className="flex-col gap-2 w-full">
                
            </CardFooter>
        </Card>
    )
}
