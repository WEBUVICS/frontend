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
import { useState } from "react"

export default function CardDemo() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateForm = () => {
        let isValid = true
        const newErrors = { username: '', password: '' }

        // Validasi username
        if (!formData.username.trim()) {
            newErrors.username = 'Username harus diisi'
            isValid = false
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username minimal 3 karakter'
            isValid = false
        }

        // Validasi password
        if (!formData.password) {
            newErrors.password = 'Password harus diisi'
            isValid = false
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password minimal 6 karakter'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
        
        // Clear error when user starts typing
        if (errors[id]) {
            setErrors(prev => ({
                ...prev,
                [id]: ''
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            setIsSubmitting(true)
            // Simulasi proses login
            setTimeout(() => {
                setIsSubmitting(false)
                alert('Login berhasil!')
            }, 1500)
        }
    }

    return (
        <Card className="flex bg-white rounded-xl max-w-md px-6">
            <CardHeader className="flex justify-center">
                <CardTitle className="text-xl font-bold">LOGIN</CardTitle>
            </CardHeader>

            <CardContent>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6 font-semibold">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Masukkan Username..."
                                value={formData.username}
                                onChange={handleChange}
                                className={errors.username ? "border-red-500" : ""}
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Masukkan Password..."
                                value={formData.password}
                                onChange={handleChange}
                                className={errors.password ? "border-red-500" : ""}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>
                    </div>
                    <CardFooter className="flex-col gap-2 w-full px-0 pb-0 pt-6">
                        <Button 
                            type="submit" 
                            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold py-2 rounded-md hover:from-blue-700 hover:to-blue-500 transition w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Memproses..." : "Login"}
                        </Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    )
}