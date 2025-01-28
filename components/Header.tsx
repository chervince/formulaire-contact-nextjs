import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="bg-background border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    Mon Site
                </Link>

            </div>
        </header>
    )
}

