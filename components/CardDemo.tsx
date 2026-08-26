import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { isAdminPreviewEnabled } from "@/lib/admin-preview";
import { connection } from "next/server";

export default async function CardDemo() {
    await connection();
    const previewEnabled = isAdminPreviewEnabled();

    return (
        <Card className="w-full max-w-md rounded-xl bg-white font-pop">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold">ADMIN PREVIEW</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 text-center">
                <p className="text-sm leading-6 text-gray-600">
                    This is a frontend-only preview. Secure admin access requires
                    server-side authentication.
                </p>
                {previewEnabled ? (
                    <Button
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-blue-400 font-semibold text-white transition-colors hover:from-blue-700 hover:to-blue-500"
                    >
                        <Link href="/dashboard">Open Dashboard Preview</Link>
                    </Button>
                ) : (
                    <p role="status" className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
                        Admin preview dinonaktifkan di production sampai autentikasi
                        server-side tersedia.
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
